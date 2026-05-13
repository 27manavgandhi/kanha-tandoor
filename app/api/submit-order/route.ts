import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, specifications, product, productType, timestamp } = body;

    // Validate required fields
    if (!name || !phone || !email || !product) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate phone number
    if (!/^[0-9]{10}$/.test(phone)) {
      return NextResponse.json(
        { success: false, error: "Invalid phone number format" },
        { status: 400 }
      );
    }

    // Get Google Apps Script URL from environment variable
    const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;

    if (!GOOGLE_SCRIPT_URL) {
      console.error("Google Script URL not configured");
      return NextResponse.json(
        { success: false, error: "Server configuration error. Please contact support." },
        { status: 500 }
      );
    }

    // Send data to Google Sheets
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        phone,
        email,
        specifications: specifications || "N/A",
        product,
        productType,
        timestamp,
      }),
    });

    const data = await response.json();

    if (!response.ok || !data.success) {
      throw new Error(data.error || "Failed to submit to Google Sheets");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error submitting order:", error);
    return NextResponse.json(
      { success: false, error: "Failed to submit order. Please try again." },
      { status: 500 }
    );
  }
}