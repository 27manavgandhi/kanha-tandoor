# 🔥 Kanha Tandoor Manufacture - Premium Tandoor Website

A modern, award-winning website for Kanha Tandoor Manufacture featuring stunning 3D animations, scroll-based interactions, and a premium UI built with Next.js 14, TypeScript, and Tailwind CSS.

![Kanha Tandoor](https://img.shields.io/badge/Next.js-14.2.3-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.3-38bdf8?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.2.10-ff69b4?style=for-the-badge&logo=framer)

---

## ✨ Features

### 🎨 **Premium UI/UX**
- Modern gradient color scheme (Orange: #FF6B35 to #F7931E)
- Glass-morphism effects throughout
- Award-winning Awwwards-level design
- Fully responsive on all devices (mobile, tablet, desktop)

### 🚀 **Advanced Animations**
- Scroll-based image sequence animations (17 frames)
- 3D card hover effects for product showcase
- Parallax hero section with floating elements
- Smooth Framer Motion transitions
- Apple-style carousel for gallery

### 📱 **Components**
- **Hero Section** - Animated landing with statistics
- **Scroll Sequence** - Canvas-based frame animation for tandoor explosion effect
- **3D Product Cards** - Interactive specification displays
- **Features Section** - 8 key features with icon animations
- **Apple Carousel** - Smooth horizontal scrolling gallery
- **WhatsApp Float** - Pulse-animated contact button
- **Product Toggle** - Seamless switch between Steel & Clay tandoors

### 🎯 **Pages**
1. **Home** - Hero, scroll animation, specs, features, gallery, CTA
2. **About** - Company story, founder profile, GST certificate, achievements
3. **Contact** - Contact form, Google Maps, quick actions

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 14.2.3 | React framework with App Router |
| **TypeScript** | 5.0 | Type safety |
| **Tailwind CSS** | 3.4.3 | Utility-first styling |
| **Framer Motion** | 11.2.10 | Advanced animations |
| **Lucide React** | 0.379.0 | Icon library |
| **Tabler Icons** | 3.5.0 | Additional icons for features |

---

## 📁 Project Structure

```text
kanha-tandoor/
├── app/
│   ├── about/
│   │   └── page.tsx              # About page
│   ├── contact/
│   │   └── page.tsx              # Contact page
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout with metadata
│   └── page.tsx                  # Home page
├── components/
│   ├── ui/
│   │   ├── 3d-card.tsx           # 3D card component
│   │   ├── apple-cards-carousel.tsx  # Carousel component
│   │   └── features-section.tsx  # Features grid
│   ├── CTASection.tsx            # Call-to-action section
│   ├── Footer.tsx                # Footer with links
│   ├── GalleryCarousel.tsx       # Product gallery
│   ├── Header.tsx                # Navigation header
│   ├── HeroSection.tsx           # Landing hero
│   ├── ProductToggle.tsx         # Steel/Clay switcher
│   ├── ScrollSequence.tsx        # Canvas frame animation
│   ├── SpecificationSection.tsx  # Product specs with 3D card
│   └── WhatsAppFloat.tsx         # WhatsApp contact button
├── lib/
│   └── utils.ts                  # Utility functions (cn)
├── public/
│   ├── frames/
│   │   ├── steel/                # 17 steel tandoor frames
│   │   │   └── Kanha Stainless Steel Tandoor (1-17).jpg
│   │   └── clay/                 # 17 clay tandoor frames
│   │       └── Kanha Clay Tandoor (1-17).jpg
│   ├── images/
│   │   ├── gallery/              # Gallery images (1-15)
│   │   ├── certificates/
│   │   │   └── gst-certificate.jpg
│   │   ├── logo.png              # Company logo
│   │   └── om-shankar.jpg        # Founder photo
│   ├── steel-tandoor-main.png    # Main steel product image
│   └── clay-tandoor-main.png     # Main clay product image
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

```powershell
# Clone the repository
git clone https://github.com/your-username/kanha-tandoor.git
cd kanha-tandoor

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📝 Configuration Steps

### 1. Add Required Images

Place the following images in the `public` directory:

```text
public/
├── images/
│   ├── logo.png                  # Your company logo (recommended: 200x200px)
│   ├── om-shankar.jpg            # Founder photo
│   └── certificates/
│       └── gst-certificate.jpg   # GST registration certificate
├── steel-tandoor-main.png        # Main steel tandoor product image
└── clay-tandoor-main.png         # Main clay tandoor product image

```
### 2. Add Frame Sequences

Your scroll animation requires 17 frames for each product:

```text
public/frames/
├── steel/
│   ├── Kanha Stainless Steel Tandoor (1).jpg
│   ├── Kanha Stainless Steel Tandoor (2).jpg
│   └── ... (up to 17)
└── clay/
├── Kanha Clay Tandoor (1).jpg
├── Kanha Clay Tandoor (2).jpg
└── ... (up to 17)
```

### 3. Add Gallery Images

```text
public/images/gallery/
├── Kanha Tandoor (1).jpeg
├── Kanha Tandoor (2).jpeg
└── ... (up to 15)
```

### 4. Configure Google Form (Optional)

In `app/contact/page.tsx`, replace line 152 with your Google Form embed:

```typescript
<iframe
  src="YOUR_GOOGLE_FORM_URL_HERE"
  width="100%"
  height="600"
  frameBorder="0"
  className="rounded-lg"
>
  Loading form...
</iframe>
```

---

## 🎨 Customization

### Color Scheme

Update colors in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: "#FF6B35",  // Main orange
    foreground: "#ffffff",
  },
  secondary: {
    DEFAULT: "#F7931E",  // Secondary orange
    foreground: "#000000",
  },
}
```

### Company Details

Update company information in:
- `app/layout.tsx` - SEO metadata
- `components/Footer.tsx` - Contact info
- `app/about/page.tsx` - Company story

### Contact Information

Update in multiple files:
- Phone: +91 8375894010, +91 9911858173
- Email: Omshankartandoor@gmail.com
- Address: Gali No.8, Swroop Nagar, Delhi-110042
- GST: 07KOEPS5938R1ZO

---

## 📦 Build & Deployment

### Build for Production

```powershell
npm run build
```

### Start Production Server

```powershell
npm start
```

### Deploy to Vercel (Recommended)

```powershell
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Deploy to Netlify

```powershell
# Build
npm run build

# Drag & drop the .next folder to Netlify
```

---

## 🔧 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server on http://localhost:3000 |
| `npm run build` | Build production bundle |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint for code quality |

---

## 📊 Performance Features

- ✅ **Image Optimization** - Next.js automatic image optimization
- ✅ **Code Splitting** - Automatic route-based code splitting
- ✅ **Lazy Loading** - Images and components load on demand
- ✅ **Canvas Rendering** - Hardware-accelerated scroll animations
- ✅ **Font Optimization** - System fonts with fallbacks
- ✅ **CSS Purging** - Tailwind removes unused styles

---

## 🌐 SEO Features

### Implemented
- ✅ Comprehensive meta tags
- ✅ Open Graph tags for social sharing
- ✅ Structured data ready
- ✅ Semantic HTML
- ✅ Alt tags on all images
- ✅ Descriptive link text
- ✅ Mobile-friendly
- ✅ Fast loading times

### Keywords Targeted
- Tandoor manufacturer Delhi
- Clay tandoor Delhi NCR
- Stainless steel tandoor
- Commercial tandoor oven
- Party tandoor, Wedding tandoor
- Restaurant tandoor suppliers
- + 50 more long-tail keywords

---

## 🎯 Browser Support

| Browser | Version |
|---------|---------|
| Chrome | Last 2 versions |
| Firefox | Last 2 versions |
| Safari | Last 2 versions |
| Edge | Last 2 versions |
| Mobile Safari | iOS 12+ |
| Chrome Android | Last 2 versions |

---

## 📱 Responsive Breakpoints

```css
/* Tailwind CSS default breakpoints */
sm: 640px   /* Mobile landscape */
md: 768px   /* Tablet */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large desktop */
2xl: 1536px /* Extra large */
```

---

## 🐛 Troubleshooting

### Images not loading?
- Check file paths match exactly
- Ensure images are in `/public` directory
- Verify file extensions (.jpg, .jpeg, .png)

### Scroll animation stuttering?
- Reduce image sizes (optimize to <500KB each)
- Use WebP format for better compression
- Check browser hardware acceleration is enabled

### Build errors?
```powershell
# Clear cache and reinstall
Remove-Item -Recurse -Force node_modules
Remove-Item -Recurse -Force .next
Remove-Item package-lock.json
npm install
```

---

## 📞 Contact

**Kanha Tandoor Manufacture**
- 📍 Address: Gali No.8, Swroop Nagar, Delhi-110042
- 📱 Phone: +91 8375894010 / +91 9911858173
- 📧 Email: Omshankartandoor@gmail.com
- 🔖 GST: 07KOEPS5938R1ZO

---

## 📄 License

This project is proprietary and confidential.
© 2024 Kanha Tandoor Manufacture. All rights reserved.

---

## 🙏 Acknowledgments

- **Next.js** - React framework
- **Tailwind CSS** - Styling framework
- **Framer Motion** - Animation library
- **Lucide Icons** - Icon library
- **Aceternity UI** - 3D components inspiration

---

## 📈 Future Enhancements

- [ ] Multi-language support (Hindi, English)
- [ ] Product comparison tool
- [ ] Online quotation system
- [ ] Customer testimonials section
- [ ] Video demonstrations
- [ ] Blog section for cooking tips
- [ ] WhatsApp catalog integration
- [ ] Payment gateway integration

---

## 🔄 Version History

### v1.0.0 (Current)
- ✅ Initial release
- ✅ Home, About, Contact pages
- ✅ Scroll-based animations
- ✅ 3D product cards
- ✅ Apple carousel
- ✅ WhatsApp integration
- ✅ Fully responsive design

---

## 💡 Tips for Best Performance

1. **Optimize Images**: Use WebP format, compress to <500KB
2. **Enable Caching**: Configure CDN for static assets
3. **Minimize JavaScript**: Already code-split by Next.js
4. **Use HTTP/2**: Enable on your hosting provider
5. **Lazy Load**: Images below fold load on scroll
6. **Preload Critical Assets**: Fonts and hero images

---

## 🛡️ Security

- ✅ No exposed API keys
- ✅ Environment variables for sensitive data
- ✅ CSP headers ready
- ✅ XSS protection
- ✅ HTTPS enforced in production

---

**Made with ❤️ for Kanha Tandoor Manufacture**

For support, please contact: 27manavgandhi@gmail.com
