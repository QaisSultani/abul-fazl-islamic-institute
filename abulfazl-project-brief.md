# Abul Fazl Islamic Institute — Complete Project Brief
> This document is the single source of truth for building the marketing website. It contains brand information, content, design direction, page structure, copy, and implementation notes. Claude Code should reference this file entirely before writing a single line of code.

---

## 1. PROJECT OVERVIEW

| Field | Detail |
|---|---|
| **Institute Name** | Abul Fazl Islamic Institute |
| **Short Name** | Abul Fazl Institute |
| **Abbreviation** | AFII |
| **Recommended Domain** | `abulfazl.org` (fallback: `abulfazliinstitute.org` or `abulfazlinstitute.org`) |
| **Type** | Managed Online Islamic Education Academy |
| **Model** | Platform owner handles marketing & coordination. Tutors handle teaching. |
| **Class Delivery** | Zoom or Google Meet (student's preference) |
| **Scheduling** | Manual — student fills form → owner contacts via WhatsApp → assigns tutor |
| **Payments** | Handled offline (manual bank transfer / PayPal) — no payment integration needed |
| **Target Launch** | MVP marketing website — lean and fast |

---

## 2. BRAND IDENTITY

### Positioning Statement
> *"The only online Islamic education platform where your child learns directly from qualified Aalim and Aalima — seminary-educated Islamic scholars, not just recitation tutors."*

### What Makes This Platform Unique (USP)
Most online Quran platforms hire tutors with basic Tajweed certifications. Abul Fazl Islamic Institute's tutors are **certified Aalim and Aalima** — graduates of full Islamic seminary programs (Dars-e-Nizami or equivalent), typically 6–8 years of intensive study. This means:

- They have deep knowledge of Quran, Hadith, Fiqh, Arabic, and Tafseer
- They can answer Islamic questions — not just teach recitation
- They are role models of Islamic character and scholarship
- Students learn the Quran in its full context, not just as sounds

This is the **#1 differentiator** and must be communicated loudly and early on every page.

### Brand Voice
- Warm, trustworthy, and scholarly — not salesy
- Speaks to parents as well as adult students
- Respectful of Islamic etiquette in tone
- English-only content (primary markets are diaspora Muslims in Western countries)
- Avoid overly corporate language — feel like a trusted institution, not a startup

### Color Palette
| Name | Hex | Usage |
|---|---|---|
| Emerald (Primary) | `#1a3c2e` | Nav, hero bg, section accents, footer |
| Emerald Mid | `#2d5e45` | Card backgrounds, hover states |
| Emerald Light | `#3d7a5a` | Subtle backgrounds |
| Gold (Accent) | `#c4973a` | CTAs, highlights, icons, dividers |
| Gold Light | `#e2b86a` | Hover states, text accents |
| Gold Pale | `#f5e8cc` | Credential bar, light section backgrounds |
| Ivory (Base) | `#faf7f0` | Page background |
| Cream | `#f2ead8` | Alternating section backgrounds |
| Text Dark | `#1a1a18` | Headings |
| Text Mid | `#4a4a42` | Body text |
| Text Light | `#7a7a6e` | Captions, secondary text |
| White | `#ffffff` | Cards, nav overlays |

### Typography
- **Display / Headings**: `Cormorant Garamond` (Google Fonts) — serif, scholarly, elegant
- **Body / UI**: `Jost` (Google Fonts) — clean, modern, readable
- Both available via Google Fonts CDN

### Design Aesthetic
- Modern Islamic — clean layouts with subtle geometric Islamic patterns as texture
- Emerald and gold palette — trustworthy, premium, culturally resonant
- No cartoon or childish elements even though kids are a target — parents are the buyers
- Generous whitespace, high-quality feel
- Subtle geometric pattern overlays (SVG-based Islamic tile patterns) at low opacity on dark sections
- Decorative Arabic calligraphy text used sparingly as visual accents (not for navigation)
- Gold divider lines and ornamental separators between sections

---

## 3. TUTORS

There are currently **4 tutors**. All are Pakistan-based. Each tutor should have a profile card on the Tutors page and can be referenced in course descriptions.

> **Note to developer**: Placeholder data is used below. Real photos, bios, and institution names should be filled in by the owner before launch. Use placeholder avatar images for now.

### Tutor 1 — Male Aalim
| Field | Detail |
|---|---|
| Gender | Male |
| Qualification | Aalim (Islamic Seminary Graduate — Dars-e-Nizami) |
| Specialization | Quran with Tajweed, Hifz, Tafseer, Islamic Studies, Basic Arabic |
| Languages | Urdu, English |
| Teaches | Male students, kids (boys), adult males |
| Social Media | Yes — some existing presence (leverage for marketing) |
| Bio placeholder | *"[Name] is a qualified Aalim with [X] years of experience teaching Quran, Tajweed, and Islamic Studies online. A graduate of [Institution Name], he brings deep scholarly knowledge and patience to every class."* |

### Tutor 2 — Female Aalima #1
| Field | Detail |
|---|---|
| Gender | Female |
| Qualification | Aalima (Islamic Seminary Graduate) |
| Specialization | Quran Reading, Tajweed, Islamic Studies for Ladies, Kids Education |
| Languages | Urdu, English |
| Teaches | Female students, kids (girls & boys up to a certain age), adult ladies |
| Bio placeholder | *"[Name] is a certified Aalima with a specialization in [area]. She creates a comfortable, nurturing environment for sisters and children to grow in their Quranic journey."* |

### Tutor 3 — Female Aalima #2
| Field | Detail |
|---|---|
| Gender | Female |
| Qualification | Aalima (Islamic Seminary Graduate) |
| Specialization | Quran, Hifz (Memorization), Duas & Islamic Etiquette for Children |
| Languages | Urdu, English |
| Teaches | Female students, children |
| Bio placeholder | *"[Name] is a dedicated Aalima with expertise in [area]. Her structured and encouraging approach has helped dozens of students memorize and understand the Quran."* |

### Tutor 4 — Female Quran Tutor
| Field | Detail |
|---|---|
| Gender | Female |
| Qualification | Certified Quran Tutor — Specialist in Qawaid & Tajweed |
| Specialization | Noorani Qaida (beginners), Quran Reading, Tajweed Rules |
| Languages | Urdu, English |
| Teaches | Complete beginners, young children, anyone starting from scratch |
| Bio placeholder | *"[Name] specializes in teaching complete beginners the foundations of Quran reading. Her patient, structured method using Noorani Qaida has helped children as young as 4 begin their Quranic journey."* |

---

## 4. COURSES OFFERED

### Course 1 — Noorani Qaida (Beginners)
- **Who it's for**: Complete beginners, children ages 4+, adults who never learned
- **What they'll learn**: Arabic alphabet, basic pronunciation, letter joining, foundational reading
- **Taught by**: Tutor 4 (specialist), also Aalimas
- **Duration**: Varies — typically 2–4 months
- **Icon suggestion**: 📖 or open book

### Course 2 — Quran Reading with Tajweed
- **Who it's for**: Students who know the alphabet and want to read properly
- **What they'll learn**: All core Tajweed rules (Ghunna, Ikhfa, Izhaar, Madd, etc.), fluent recitation
- **Taught by**: All tutors
- **Icon suggestion**: 🎙️ or microphone

### Course 3 — Hifz (Quran Memorization)
- **Who it's for**: Students committed to memorizing the full or partial Quran
- **What they'll learn**: Structured memorization, daily revision (Muraja'a), retention techniques
- **Taught by**: Aalim, Aalimas
- **Note**: This is a long-term program — students must be assessed first
- **Icon suggestion**: 🧠 or star

### Course 4 — Tafseer (Quran Explanation)
- **Who it's for**: Students who want to understand what they recite
- **What they'll learn**: Meaning, context, and explanation of Quranic verses; related Hadith; lessons for daily life
- **Taught by**: Aalim and Aalimas only (requires scholarly qualification — this is a unique differentiator)
- **Icon suggestion**: 💡 or lamp

### Course 5 — Islamic Studies for Kids
- **Who it's for**: Children ages 5–15
- **What they'll learn**: Daily Duas, how to perform Salah, Pillars of Islam and Iman, Stories of Prophets, Islamic manners (Akhlaq), Islamic months and events
- **Taught by**: Aalimas, Aalim
- **Note**: Perfect for Muslim families in the West with no local Islamic school access
- **Icon suggestion**: ⭐ or crescent

### Course 6 — Islamic Studies for Ladies (Aalima Classes)
- **Who it's for**: Adult women who want to deepen their Islamic knowledge
- **What they'll learn**: Fiqh of worship, women's Islamic rulings, Hadith basics, Seerah, practical Islam
- **Taught by**: Aalimas only
- **Note**: This is a very underserved, high-demand segment — market it separately
- **Icon suggestion**: 🌙 or crescent moon

### Course 7 — Basic Arabic Language
- **Who it's for**: Students who want to understand Quranic Arabic
- **What they'll learn**: Arabic alphabet (if needed), basic vocabulary, sentence structure, understanding common Quranic phrases
- **Taught by**: Aalim, Aalimas
- **Icon suggestion**: 🔤 or Arabic letter

---

## 5. TARGET AUDIENCE

### Primary Markets (Geographic)
- United Kingdom
- United States
- Canada
- Australia

These are diaspora Muslim communities where:
- Local Islamic scholars are hard to find
- Mosques are limited or inconvenient
- Parents are actively looking for qualified online alternatives
- They can afford and are willing to pay for quality

### Student Segments
| Segment | Description | Key Message |
|---|---|---|
| **Parents of young children** | Ages 4–12, parents are buyers | "Give your child a foundation in Quran and Deen — taught by a real scholar" |
| **Teenage students** | Ages 13–18, need gender-appropriate tutors | "Learn from qualified Aalim/Aalima who understand your questions" |
| **Adult learners** | Never properly learned, or want to improve | "It's never too late — our scholars will take you from beginner to confident" |
| **Adult sisters** | Want Aalima-only classes for comfort | "Learn in a safe, scholarly environment with our certified Aalimas" |
| **Revert Muslims** | New to Islam, need foundational education | "Begin your journey with patient, knowledgeable scholars" |

### Languages
- Teaching: Urdu + English (tutors can accommodate both)
- Website & Marketing: English only

---

## 6. PRICING STRUCTURE

> Payments are handled manually (no integration needed). This section is for display on the Pricing page only.

### Suggested Monthly Plans

| Plan | Classes/Month | Duration Each | Monthly Price (USD) | 
|---|---|---|---|
| **Starter** | 8 classes | 30 min | $45 |
| **Standard** | 12 classes | 30 min | $65 |
| **Intensive** | 20 classes | 30 min | $100 |

### Additional Pricing Notes
- **Free Trial**: 1 free 30-minute trial class — no commitment, no payment required
- **Family Discount**: 10% off for second child, 15% off for third child and beyond
- **Sibling Sharing**: Two children can share a class (especially for younger kids) at the single student rate
- **Currency Display**: Show USD primarily. Can mention GBP/CAD/AUD equivalents in small text
- **Payment Methods** (to mention on site): PayPal, bank transfer — contact us to arrange
- **Refund Policy**: If not satisfied after the first paid class, full refund offered
- **No contracts**: Cancel anytime

### Pricing Page Framing Copy
> *"Seminary-educated scholars at the price of a local tutor. Our Aalim and Aalima tutors bring years of formal Islamic education to every session — at a fraction of what you'd pay for in-person classes, with none of the commute."*

---

## 7. WEBSITE STRUCTURE (5 Pages)

### Page 1: Home (`/`)
The most important page. Should convert visitors into free trial bookings.

**Sections in order:**
1. Navigation
2. Hero Section
3. Credential/Trust Bar
4. Why Aalim/Aalima Matters (differentiator section)
5. Courses Overview (cards — 6-7 courses)
6. How It Works (3 steps)
7. Meet Our Tutors (preview — 4 tutor cards, link to full tutors page)
8. Testimonials (placeholder — to be filled when reviews come in)
9. Free Trial CTA Banner
10. FAQ (5–6 most common questions)
11. Footer

### Page 2: Courses (`/courses`)
- Intro heading + short description
- One detailed card per course
- Each card: course name, who it's for, what you'll learn, which tutor teaches it, "Book Free Trial" button

### Page 3: Our Tutors (`/tutors`)
- Intro heading: *"Learn from Qualified Ulama"*
- 4 tutor profile cards (photo, name, qualification badge, specializations, languages, short bio)
- Section explaining what Aalim/Aalima means and why it matters (for those unfamiliar)

### Page 4: Pricing (`/pricing`)
- 3 plan cards (Starter / Standard / Intensive)
- Free trial highlight at the top
- Family discount section
- Payment method info (manual, contact us)
- FAQs specific to pricing

### Page 5: Enroll / Contact (`/contact`)
- Heading: *"Book Your Free Trial Class"*
- Enrollment form fields:
  - Full Name (required)
  - Email Address (required)
  - WhatsApp Number with country code (required)
  - Country (dropdown — UK, USA, Canada, Australia, Other)
  - Who is the student? (Myself / My Child)
  - Student Age (if child)
  - Course of Interest (dropdown — all 7 courses + "Not sure yet")
  - Preferred Schedule (text input — days and times)
  - How did you hear about us? (dropdown)
  - Message / Questions (optional textarea)
  - Submit button: "Request Free Trial"
- After form: WhatsApp direct link button ("Or message us directly on WhatsApp")
- Response time note: *"We'll contact you within 24 hours, in sha Allah."*

---

## 8. DETAILED SECTION COPY

### Hero Section
**Eyebrow label**: `Aalim & Aalima Certified Tutors`

**H1 Headline**:
> Learn Quran & Islamic Studies from *Qualified Scholars*

**Subheadline**:
> At Abul Fazl Islamic Institute, every tutor is a seminary-educated Aalim or Aalima. Your child doesn't just learn to recite — they learn from scholars who have dedicated years to mastering the Quran, Hadith, and Islamic sciences.

**Primary CTA**: `Book Free Trial Class`
**Secondary CTA**: `Explore Courses`

**Stats to display** (use these as social proof — update with real numbers):
- `4` Qualified Scholars
- `3` Countries Served
- `Free` Trial Class

---

### Credential Bar (below hero)
Four trust badges displayed horizontally:
1. 🎓 **Aalim & Aalima Qualified** — Seminary-educated scholars
2. 👩 **Female Tutors Available** — Aalimas for sisters & children
3. 🌍 **Serving UK, USA, Canada & Australia**
4. ✅ **Free 30-Min Trial** — No commitment required

---

### Why Aalim/Aalima Section
**Section Label**: `Our Difference`

**H2**:
> There's a difference between a tutor and a *scholar*

**Body copy**:
> Most online Quran platforms hire teachers with a short Tajweed certificate. Our tutors are different. Our Aalim and Aalimas have completed a full Dars-e-Nizami seminary education — 6 to 8 years of intensive study in Quran, Hadith, Fiqh, Arabic, and Tafseer.
>
> This means your child isn't just learning to recite words — they're learning from someone who can explain what those words mean, answer questions about Islam, and model the character of a true student of knowledge.

**Four key points:**
1. 🏫 **Seminary Qualified** — Completed Dars-e-Nizami or equivalent full Islamic education
2. 📚 **Deep Quranic Knowledge** — Able to teach Tafseer, Hadith, and Fiqh — not just recitation
3. 👩‍🏫 **Aalimas for Sisters** — Female scholars for daughters and adult ladies
4. 💬 **Your Questions Answered** — Islamic questions welcome in class — no question is too basic

---

### How It Works Section
**Section Label**: `Getting Started`
**H2**: `Three steps to begin your journey`

**Step 1**: **Fill the Enrollment Form**
> Tell us about yourself or your child — what you want to learn and when you're available. Takes under 2 minutes.

**Step 2**: **Get Matched & Schedule Your Trial**
> We personally review your request and match you with the right Aalim or Aalima. You'll hear from us within 24 hours via WhatsApp.

**Step 3**: **Start Your Free Trial Class**
> Your first 30-minute class is completely free. No payment, no commitment. Just come and experience the difference.

---

### Testimonials Section
**Section Label**: `Student Stories`
**H2**: `Trusted by families across the world`

**Placeholder testimonials** (replace with real ones as they come in):

> *"My daughter has been learning with the Aalima for 3 months now and the improvement in her recitation — and her love for Islam — has been incredible. We couldn't find anything like this locally in London."*
> — **Fatima K., London, UK**

> *"Finally found a platform where my son can ask Islamic questions and get proper scholarly answers. The Aalim is knowledgeable, patient, and truly inspiring."*
> — **Ahmed R., Toronto, Canada**

> *"As a revert, I was nervous to start. The Aalima made me feel completely comfortable from day one. Now I'm reading Quran with proper Tajweed Alhamdulillah."*
> — **Sarah M., Melbourne, Australia**

---

### FAQ Section
**Section Label**: `Common Questions`
**H2**: `Frequently Asked Questions`

**Q1: What platform do you use for classes?**
Classes are conducted over Zoom or Google Meet — whichever you prefer. All you need is a device and a stable internet connection.

**Q2: What is an Aalim / Aalima?**
An Aalim (male) or Aalima (female) is a graduate of a full Islamic seminary program — typically 6–8 years of study covering Quran, Hadith, Fiqh, Arabic language, and Islamic sciences. This is a significantly higher qualification than a standard Quran tutor certification.

**Q3: Is the trial class really free?**
Yes — completely free, no payment details required. We offer one 30-minute trial class so you can experience the quality of our teaching before committing to anything.

**Q4: My daughter is a teenager — can she learn with a female Aalima?**
Absolutely. We have certified Aalimas available specifically for sisters and children. All female student requests are assigned to our female tutors.

**Q5: What age groups do you teach?**
We teach all ages — from children as young as 4 years old (using Noorani Qaida) to adults of any age. Each student is assessed and placed with the right tutor for their level.

**Q6: Can we have classes in Urdu?**
Yes. Our tutors are fluent in both Urdu and English and can teach in whichever language the student is more comfortable with.

**Q7: How much does it cost?**
Our plans start at $45/month for 8 classes. We also offer family discounts for multiple children. Visit our Pricing page for full details.

**Q8: Can I change my tutor if we're not a good match?**
Yes, always. Your comfort and progress come first. Just let us know and we'll arrange a new match.

---

### Free Trial CTA Banner
**Background**: Emerald green with gold accents
**H2**: *"Begin with a free class. No payment. No commitment."*
**Body**: *"Book your free 30-minute trial with one of our qualified scholars today. We'll match you with the right Aalim or Aalima and you'll experience the difference from the very first class — in sha Allah."*
**CTA Button**: `Book Free Trial Now`

---

### Footer
**Columns:**
- Logo + short tagline: *"Seminary-educated scholars. Online. Accessible. Trusted."*
- Quick Links: Home, Courses, Tutors, Pricing, Contact
- Courses: (list all 7 with links)
- Contact: WhatsApp number, Email address
- Social: Instagram, Facebook (Aalim's accounts — add links when available)

**Bottom bar**: `© 2025 Abul Fazl Islamic Institute. All rights reserved.`

---

## 9. NAVIGATION STRUCTURE

```
Logo (left)          Home  |  Courses  |  Tutors  |  Pricing  |  Contact     [Book Free Trial] (right, gold button)
```

- Navigation is fixed/sticky to top
- Background: Emerald dark on scroll (transparent on hero for homepage)
- Mobile: Hamburger menu — full-screen overlay with links centered

---

## 10. TECH STACK RECOMMENDATION

| Layer | Choice | Reason |
|---|---|---|
| **Framework** | Next.js 14+ (App Router) | Owner is familiar; great for SEO, fast |
| **Styling** | Tailwind CSS | Rapid styling, consistent design tokens |
| **Fonts** | Google Fonts (Cormorant Garamond + Jost) | Via CDN in layout.tsx |
| **Animations** | Framer Motion | Smooth scroll reveals, hero animations |
| **Form Handling** | React Hook Form + Formspree or EmailJS | No backend needed — sends to email |
| **Icons** | Lucide React | Lightweight, consistent |
| **Images** | next/image | Optimized automatically |
| **Deployment** | Vercel | Free tier, perfect for Next.js |

### Form Submission (No Backend Needed)
Use **Formspree** (free tier) or **EmailJS** — when a student submits the enrollment form, the owner gets an email with all the details. No server or database needed.

---

## 11. COMPONENT ARCHITECTURE (Next.js)

```
/app
  /layout.tsx         → Root layout (fonts, metadata, nav, footer)
  /page.tsx           → Homepage
  /courses/page.tsx   → Courses page
  /tutors/page.tsx    → Tutors page
  /pricing/page.tsx   → Pricing page
  /contact/page.tsx   → Enrollment / contact page

/components
  /layout
    Navbar.tsx
    Footer.tsx
  /ui
    Button.tsx
    SectionLabel.tsx
    CourseCard.tsx
    TutorCard.tsx
    PricingCard.tsx
    TestimonialCard.tsx
    FAQAccordion.tsx
  /sections (homepage sections as individual components)
    Hero.tsx
    CredentialBar.tsx
    WhyUlama.tsx
    CoursesOverview.tsx
    HowItWorks.tsx
    TutorsPreview.tsx
    Testimonials.tsx
    TrialCTABanner.tsx
    FAQ.tsx

/lib
  /data
    courses.ts        → All course data
    tutors.ts         → All tutor data
    faqs.ts           → FAQ content
    pricing.ts        → Pricing plan data
```

---

## 12. SEO & METADATA

### Homepage Meta
- **Title**: `Abul Fazl Islamic Institute | Online Quran & Islamic Studies with Certified Aalim & Aalima`
- **Description**: `Learn Quran, Tajweed, Hifz, and Islamic Studies online with seminary-educated Aalim & Aalima scholars. Serving families in the UK, USA, Canada & Australia. Book your free trial today.`
- **Keywords**: online Quran classes, Aalim tutor, Aalima teacher, learn Quran online UK, online Quran classes for kids, Tajweed classes, Hifz online, Islamic studies online

### OG Image
- Design a 1200x630px image with institute name, tagline, and emerald/gold branding

### Sitemap
Auto-generate with next-sitemap package for all 5 pages.

---

## 13. MARKETING STRATEGY

### Phase 1 — Soft Launch (Month 1)
- Share website with personal networks of all 4 tutors
- Ask Aalim to post about the platform on his social media
- Post in local mosque WhatsApp groups and community groups
- Goal: **First 5–10 students**

### Phase 2 — Organic Community Marketing (Month 2–3)
**Facebook Groups to target** (post organically, not as ads):
- UK Muslim Mums / Parents groups
- Pakistani community groups in UK, Canada, Australia
- Revert Muslim support groups
- Islamic homeschooling groups

**Instagram Content** (use Aalim's existing account or create new @abulfazlinstitute):
- Short Tajweed tips (30-second reels)
- Common recitation mistakes and corrections
- "Did you know?" Islamic facts
- Student milestone shoutouts (with permission)

**TikTok** (optional, high-reach for Islamic content):
- Similar short-form Islamic education content

### Phase 3 — Referral Program (Month 2 onwards)
- Every student who refers a new student gets **1 free class**
- Mention this on the website and remind students in WhatsApp follow-ups

### Phase 4 — Paid Ads (Month 3–4 when ready)
**Facebook & Instagram Ads:**
- Target: Muslim parents, age 25–45, UK/US/Canada/Australia
- Interests: Islam, Quran, Muslim parenting, Islamic education
- Ad format: Video (30 sec) — show the Aalim or Aalima teaching, highlight free trial
- Budget start: $10–15/day

**Google Ads:**
- Keywords: "online Quran classes for kids UK", "online Quran tutor", "learn Quran online with Aalim"
- Budget start: $10/day
- Link to `/contact` page (free trial form)

### WhatsApp as Primary Communication Channel
- All follow-ups, scheduling, and student communication on WhatsApp
- Add a WhatsApp chat button (floating) on the website using `wa.me/` link
- Include WhatsApp number in footer

---

## 14. CONTENT TO GATHER BEFORE LAUNCH

The developer should flag these as placeholders and the owner must fill them in:

- [ ] Real tutor photos (professional headshots or clean portraits)
- [ ] Real tutor names (first name at minimum, or preferred display name)
- [ ] Seminary/institution name for each tutor
- [ ] WhatsApp contact number for the institute
- [ ] Email address for the institute
- [ ] Social media handles (Instagram, Facebook)
- [ ] Formspree endpoint or EmailJS credentials (for contact form)
- [ ] Real testimonials (collect from existing students if any)
- [ ] Institute logo (or request developer to create a simple text-based logo)

---

## 15. THINGS TO AVOID

- Do NOT integrate payment gateway at this stage — adds complexity and is not needed
- Do NOT build a student dashboard or login system — not needed for MVP
- Do NOT build a custom video classroom — Zoom/Google Meet is sufficient
- Do NOT over-engineer — the goal is a clean, professional 5-page marketing website
- Do NOT use childish design elements — the audience is parents who want to see gravitas
- Do NOT downplay the Aalim/Aalima credential — this is the entire differentiator and must be prominent

---

## 16. SUCCESS METRICS FOR LAUNCH

| Metric | Target (First 3 Months) |
|---|---|
| Free trial requests | 20+ |
| Converted to paid students | 10+ |
| Monthly revenue | $450–$700+ |
| Testimonials collected | 5+ |
| Social media followers | 200+ |

---

*Document prepared as project brief for Claude Code. All section copy, structure, branding, and implementation guidance is contained above. Build the website faithfully to this spec, using placeholder content where real assets are not yet available.*
