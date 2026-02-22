# Abul Fazl Islamic Institute - Marketing Website

A modern, professional marketing website for Abul Fazl Islamic Institute - an online Islamic education platform featuring seminary-educated Aalim and Aalima tutors serving students worldwide.

## 🚀 Quick Start

### Development

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

Visit [http://localhost:3000](http://localhost:3000) to view the website.

## 📋 Features

- **5 Pages**: Home, Courses, Tutors, Pricing, Contact
- **7 Courses**: Comprehensive Islamic education offerings
- **4 Tutor Profiles**: Showcasing qualified Aalim and Aalima scholars
- **Responsive Design**: Mobile-first, works on all devices
- **Modern Tech Stack**: Next.js 16, TypeScript, Tailwind CSS v4, Framer Motion
- **Contact Form**: React Hook Form + Formspree integration
- **SEO Optimized**: Proper metadata and semantic HTML

## 🎨 Brand Colors

- **Emerald Dark**: `#1a3c2e` (Primary)
- **Emerald Mid**: `#2d5e45`
- **Emerald Light**: `#3d7a5a`
- **Gold**: `#c4973a` (Accent)
- **Gold Light**: `#e2b86a`
- **Gold Pale**: `#f5e8cc`
- **Ivory**: `#faf7f0` (Background)
- **Cream**: `#f2ead8`

## 📝 Important TODOs Before Launch

### 1. Content to Replace

**Tutor Information** (`lib/data/tutors.ts`):
- [ ] Replace `[Male Aalim Name]` with real tutor name
- [ ] Replace `[Female Aalima Name #1]` with real tutor name
- [ ] Replace `[Female Aalima Name #2]` with real tutor name
- [ ] Replace `[Female Quran Tutor Name]` with real tutor name
- [ ] Update all tutor bios with real information
- [ ] Replace `[X]` years of experience placeholders
- [ ] Replace `[Institution Name]` with actual seminary names
- [ ] Replace `[area]` specialization placeholders

**Tutor Photos** (`public/tutors/`):
- [ ] Add real tutor headshot photos:
  - `placeholder-male.jpg` → Real male Aalim photo
  - `placeholder-female-1.jpg` → Real Aalima #1 photo
  - `placeholder-female-2.jpg` → Real Aalima #2 photo
  - `placeholder-female-3.jpg` → Real female tutor photo
- Photos should be professional, high-quality (at least 400x400px)
- Create the `public/tutors/` directory and add photos

**Contact Information** (`components/layout/Footer.tsx` and `app/contact/page.tsx`):
- [x] Replace `+[WhatsApp Number]` with real WhatsApp number (with country code)
- [x] Replace `info@abulfazl.org` with real email address

**Social Media** (`components/layout/Footer.tsx`):
- [x] Add real Facebook page URL (https://www.facebook.com/abul.fazl.islamic.institute/)
- [x] Add real Instagram handle URL (https://www.instagram.com/abul.fazl.islamic.institute/)

**Testimonials** (`lib/data/testimonials.ts`):
- [ ] Replace placeholder testimonials with real student/parent reviews
- [ ] Get permission from reviewers to use their names
- [ ] Mark `verified: true` for real testimonials

### 2. Form Configuration

**Formspree Setup** (`app/contact/page.tsx`):
1. Go to [https://formspree.io](https://formspree.io) and create a free account
2. Create a new form and get your form ID
3. Replace `'YOUR_FORMSPREE_ID'` in `app/contact/page.tsx` (line 24) with your actual Formspree form ID

**WhatsApp Direct Link** (`app/contact/page.tsx`):
- [ ] Replace `YOUR_WHATSAPP_NUMBER` with real WhatsApp number in the format: `44XXXXXXXXXX` (no + or spaces)

### 3. Domain & Deployment

**Domain**: `abulfazl.org` ✅

**Deployment** (Recommended: Vercel):
1. Push code to GitHub
2. Connect repository to Vercel ([vercel.com](https://vercel.com))
3. Deploy with one click
4. Connect domain `abulfazl.org` in Vercel settings
5. Configure DNS records as instructed by Vercel

### 4. Logo (Optional)

Currently using text-only logo. To add a custom logo:
1. Create logo image (SVG or PNG recommended)
2. Save to `public/logo.svg` or `public/logo.png`
3. Update `components/layout/Navbar.tsx` to use Image component
4. Update `components/layout/Footer.tsx` for footer logo

## 📁 Project Structure

```
abul-fazl-islamic-institute/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx               # Root layout with fonts & metadata
│   ├── page.tsx                 # Homepage
│   ├── courses/page.tsx         # Courses page
│   ├── tutors/page.tsx          # Tutors page
│   ├── pricing/page.tsx         # Pricing page
│   ├── contact/page.tsx         # Contact/Enrollment page
│   └── globals.css              # Global styles & brand colors
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx           # Navigation bar
│   │   └── Footer.tsx           # Footer
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── SectionLabel.tsx
│   │   ├── CourseCard.tsx
│   │   ├── TutorCard.tsx
│   │   ├── PricingCard.tsx
│   │   ├── TestimonialCard.tsx
│   │   └── FAQAccordion.tsx
│   └── sections/                # Homepage sections
│       ├── Hero.tsx
│       ├── CredentialBar.tsx
│       ├── WhyUlama.tsx
│       ├── CoursesOverview.tsx
│       ├── HowItWorks.tsx
│       ├── TutorsPreview.tsx
│       ├── Testimonials.tsx
│       ├── TrialCTABanner.tsx
│       └── FAQ.tsx
└── lib/
    └── data/                     # Content data files
        ├── courses.ts
        ├── tutors.ts
        ├── faqs.ts
        ├── pricing.ts
        └── testimonials.ts
```

## 🛠 Tech Stack

- **Framework**: Next.js 16.1.6 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Fonts**: Cormorant Garamond (headings), Jost (body)
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Formspree
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📱 Pages Overview

### 1. Home (`/`)
Complete homepage with:
- Hero section with CTAs
- Credential bar (4 trust badges)
- Why Aalim/Aalima matters section
- 7 courses overview
- How it works (3 steps)
- Tutors preview
- Testimonials
- Free trial CTA banner
- FAQ section

### 2. Courses (`/courses`)
- All 7 courses with detailed information
- "Book Free Trial" CTA on each card
- Bottom CTA section

### 3. Tutors (`/tutors`)
- 4 tutor profile cards
- Explainer: "What is Aalim/Aalima?"
- Bottom CTA

### 4. Pricing (`/pricing`)
- Free trial highlight
- 3 pricing plans (Starter, Standard, Intensive)
- Family discount section
- Payment information
- Pricing-specific FAQs

### 5. Contact (`/contact`)
- Enrollment form (11 fields)
- Form validation
- Success state after submission
- WhatsApp direct contact option
- 24-hour response promise

## 🎯 Marketing Strategy

Refer to the [Project Brief](abulfazl-project-brief.md) section 13 for:
- Phase 1: Soft launch via tutor networks
- Phase 2: Organic community marketing (Facebook groups, Instagram)
- Phase 3: Referral program
- Phase 4: Paid ads (Facebook, Instagram, Google)

## 📊 Success Metrics (First 3 Months)

- Free trial requests: 20+
- Converted to paid students: 10+
- Monthly revenue: $450–$700+
- Testimonials collected: 5+
- Social media followers: 200+

## 🔒 What NOT to Add (MVP Scope)

- ❌ Payment gateway integration
- ❌ Student dashboard or login system
- ❌ Custom video classroom (use Zoom/Google Meet)
- ❌ Automated scheduling system
- ❌ Database or backend

Keep it simple - this is a marketing website that drives free trial bookings.

## 📞 Support

For questions or issues:
- Check the [Project Brief](abulfazl-project-brief.md) for detailed specifications
- Review component files for inline TODO comments
- Test thoroughly before launch

## 🚀 Launch Checklist

- [ ] Replace all placeholder content (tutors, photos, contact info)
- [ ] Set up Formspree account and update form ID
- [ ] Add real testimonials (get permission first)
- [ ] Test contact form submission
- [ ] Test all navigation links
- [ ] Test on mobile, tablet, and desktop
- [ ] Check all pages load correctly
- [ ] Verify WhatsApp links work
- [x] Set up custom domain (abulfazl.org)
- [ ] Deploy to Vercel
- [x] Configure sitemap (sitemap.xml auto-generated)
- [ ] Set up Google Analytics (optional)
- [ ] Submit sitemap to Google Search Console after deployment

---

**Built with Claude Code** | Generated: February 2025
