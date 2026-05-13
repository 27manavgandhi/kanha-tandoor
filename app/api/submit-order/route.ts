// app/api/submit-order/route.ts

import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {

    // =========================================
    // PARSE REQUEST BODY
    // =========================================

    const body = await request.json();

    const {
      name,
      phone,
      email,
      address,
      city,
      state,
      pincode,
      specifications,
      quantity,
      product,
      productType,
      timestamp,
    } = body;

    // =========================================
    // VALIDATE REQUIRED FIELDS
    // =========================================

    if (
      !name ||
      !phone ||
      !email ||
      !address ||
      !city ||
      !state ||
      !pincode ||
      !product ||
      !quantity
    ) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing required fields",
        },
        {
          status: 400,
        }
      );
    }

    // =========================================
    // VALIDATE PHONE NUMBER
    // =========================================

    if (!/^[0-9]{10}$/.test(phone)) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid phone number format",
        },
        {
          status: 400,
        }
      );
    }

    // =========================================
    // VALIDATE PINCODE
    // =========================================

    if (!/^[0-9]{6}$/.test(pincode)) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid pincode format",
        },
        {
          status: 400,
        }
      );
    }

    // =========================================
    // GOOGLE APPS SCRIPT URL
    // =========================================

    const GOOGLE_SCRIPT_URL =
      process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;

    if (!GOOGLE_SCRIPT_URL) {

      console.error(
        "NEXT_PUBLIC_GOOGLE_SCRIPT_URL is missing"
      );

      return NextResponse.json(
        {
          success: false,
          error: "Server configuration error",
        },
        {
          status: 500,
        }
      );
    }

    // =========================================
    // CONSTRUCT FULL ADDRESS
    // =========================================

    const fullAddress = `
${address},
${city},
${state} - ${pincode}
    `.trim();

    // =========================================
    // PREPARE PAYLOAD
    // =========================================

    const payload = {
      timestamp: timestamp || new Date().toISOString(),
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim(),
      address: fullAddress,
      product: product.trim(),
      productType: productType || "N/A",
      quantity: quantity,
      specifications: specifications || "N/A",
    };

    console.log(
      "Sending payload to Google Apps Script:",
      payload
    );

    // =========================================
    // SEND DATA TO GOOGLE APPS SCRIPT
    // =========================================

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    });

    // =========================================
    // GET RAW RESPONSE TEXT
    // =========================================

    const responseText = await response.text();

    console.log(
      "Google Script Raw Response:",
      responseText
    );

    let data;

    try {

      data = JSON.parse(responseText);

    } catch (parseError) {

      console.error(
        "Failed to parse Google Script response:",
        parseError
      );

      return NextResponse.json(
        {
          success: false,
          error: "Invalid response from Google Sheets",
        },
        {
          status: 500,
        }
      );
    }

    // =========================================
    // HANDLE GOOGLE SCRIPT FAILURE
    // =========================================

    if (!response.ok || !data.success) {

      console.error(
        "Google Script Error:",
        data
      );

      return NextResponse.json(
        {
          success: false,
          error:
            data.error ||
            "Failed to submit order",
        },
        {
          status: 500,
        }
      );
    }

    // =========================================
    // SUCCESS RESPONSE
    // =========================================

    return NextResponse.json({
      success: true,
      message: "Order submitted successfully",
    });

  } catch (error: any) {

    console.error(
      "SUBMIT ORDER API ERROR:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        error:
          error?.message ||
          "Failed to submit order. Please try again.",
      },
      {
        status: 500,
      }
    );
  }
}