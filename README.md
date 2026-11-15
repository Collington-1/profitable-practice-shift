# The Profitable Practice Accelerator™ — Website & Implementation Guide

A high-converting, responsive single-page landing website engineered for **Dr Amy Traore-Shumbusho’s** 8-week group coaching and implementation programme: **The Profitable Practice Accelerator™**, built upon **The Profitable Practice Shift™** methodology.

---

## 1. Simple, Plain-English Explanation (For Client Communication)

If your client asks: *"What was built, how does it work, and what technologies did you use?"*, here is how to explain it in simple, non-intimidating terms:

### What Is This Website?
* It is a **Single-Page Conversion Landing Page**. 
* Instead of clicking across separate slow-loading pages that lose the visitor's attention, the entire journey flows seamlessly on one page with high-speed smooth scrolling.
* It follows a proven psychological structure designed specifically for established dental professionals:
  1. **Hero**: Validates their clinical mastery and challenges them on practice profitability.
  2. **The Problem**: Names the *Busy-Practice Profitability Gap™* and the 4 bottlenecks draining practice revenue.
  3. **The Methodology**: Explains the 5-step framework (*Diagnose, Elevate, Communicate, Convert, Optimize*).
  4. **Founder**: Introduces Dr. Amy's background and credibility (*Smile360 Dental Specialists*).
  5. **The 8-Week Journey**: Walks through what happens each week in the Accelerator.
  6. **What You Receive**: Showcases the 10 core tools, scorecards, and templates without fluff.
  7. **The Strategic Value**: Highlights what better practice economics makes possible.
  8. **Investment**: Compares the 3 payment plans clearly with instant enrolment CTAs.
  9. **Interactive FAQs**: Addresses common objections (time constraints, practice suitability).
  10. **Close-Out**: A dignified, confident final call to action.

### What Programming Languages & Tools Are Used?
* **React 19 & TypeScript**: 
  - Think of React like LEGO bricks. Every section (the hero, the pricing cards, the interactive accordion) is a distinct, reusable block of code.
  - TypeScript is a safety layer over JavaScript. It checks every piece of data (like prices and dates) to ensure there are no bugs, broken buttons, or typos.
* **Tailwind CSS**: 
  - The styling engine. It ensures the website looks like a bespoke, art-directed luxury editorial magazine rather than a generic SaaS website.
  - It strictly enforces the client's custom palette: **Deep Charcoal/Near-Black (`#0B0B0B`)**, **Warm Ivory (`#F3EEE4`)**, and **Muted Antique Gold (`#C5A64A`)**.
  - Headings use **Segoe UI**; body text uses **Inter Tight**.
* **Vite**:
  - The build tool and engine. It loads the website in fractions of a second and bundles the code into ultra-compact, high-speed files for production.

### Is There a Backend?
* **Right Now**: The website is an ultra-fast **Frontend Web Application**. All content, interactivity, responsive layouts, and animations live in the client's browser.
* **For Stripe Payments (When Ready)**: A tiny, secure backend endpoint (like a Serverless Function or Node.js route `/api/create-checkout-session`) will be connected.
  - *Why?* Because security rules dictate that payment cards and secret keys must **never** be exposed in a website's frontend code. Our code is already architected to plug this in effortlessly.

---

## 2. Project Structure & Key Files

```
Profitable Practice Shift/
├── public/
│   └── assets/                     # All images, portraits, and brand assets
│       ├── dr-amy-logo-white.png   # Official brand logo
│       ├── dr-amy-hero-portrait.png# High-res circular hero image
│       ├── dr-amy-about.jpg        # High-res clinical founder image
│       ├── dr-amy-speaking.jpg     # Dr. Amy presenting methodology
│       ├── practice-interior.jpg   # Clinic operatory photograph
│       └── practice-clinic.jpg     # Practice reception atmosphere
├── src/
│   ├── App.tsx                     # Main application layout orchestrator
│   ├── main.tsx                    # React mounting entry point
│   ├── index.css                   # Global styles & custom scrollbars
│   ├── data/
│   │   ├── programme.ts            # CENTRAL CONFIG: Dates, pricing, bottlenecks, FAQs
│   │   └── assets-manifest.ts      # Asset registry & verification table
│   ├── lib/
│   │   └── payments/
│   │       ├── stripe.ts           # Frontend Stripe checkout boundary
│   │       └── server-endpoint-example.ts # Sample backend Stripe route
│   └── components/
│       ├── Navbar.tsx              # Sticky header + mobile drawer + anchors
│       ├── Hero.tsx                # Section 01: Hero / Above the Fold
│       ├── Problem.tsx             # Section 02: 4 Bottlenecks & Quick Check
│       ├── Methodology.tsx         # Section 03: 5 Shifts Interactive Accordion
│       ├── Founder.tsx             # Section 04: About Dr Amy 3-column panel
│       ├── Journey.tsx             # Section 05: 8-Week Milestone Stages Flow
│       ├── Deliverables.tsx        # Section 06: What You Receive Bento Grid
│       ├── ValueBand.tsx           # Section 07: Strategic Value Band
│       ├── Investment.tsx          # Section 08: 3-Column Pricing Comparison
│       ├── FAQ.tsx                 # Section 09: Tabbed & Accordion FAQ
│       ├── Closeout.tsx            # Section 10: Final Close-Out / Enrolment CTA
│       └── EnrolmentModal.tsx      # Stripe-ready Enrolment Modal / Drawer
├── .env.example                    # Environment variable template for Stripe
├── index.html                      # HTML entry with font preloads
├── tailwind.config.js              # Custom brand color & typography definitions
├── vite.config.ts                  # Vite build configuration
└── package.json                    # Dependencies & build scripts
```

---

## 3. How to Update Content (User Manual)

You do **not** need to touch any complex code to update dates, prices, or questions. Everything is centralized in:
`src/data/programme.ts`

* **To change the Cohort Start Date**:
  Find `cohortStartDate: "First week of December 2026"` in `src/data/programme.ts` and change the text.
* **To update Pricing or Instalment Due Dates**:
  Edit the numbers or dates in `pricingPlans`.
* **To add or modify FAQs**:
  Add items directly to the `faqs` list in `src/data/programme.ts`.

---

## 4. Stripe Integration — Complete Before Launch

The website is **Stripe-Ready**. Here is the exact checklist to complete before accepting live payments:

### Step 1: Create Products & Prices in Stripe Dashboard
1. Log in to [Stripe Dashboard](https://dashboard.stripe.com/).
2. Navigate to **Product Catalog** > **Add Product**.
3. Create a product named: `The Profitable Practice Accelerator™`.
4. Create 3 Prices matching the programme options:
   - **Option 1 (Pay in full)**: One-time payment of `$2,500`. Note the Price ID (e.g., `price_1Pxxx...`).
   - **Option 2 (Two payments)**: `$1,500` initial. (Confirm whether you want Stripe to charge the remaining `$1,300` automatically via an invoice or recurring schedule on Nov 20, 2026).
   - **Option 3 (Three payments)**: `$1,000` initial.
5. In your production `.env` file (copied from `.env.example`), fill in:
   ```env
   VITE_STRIPE_PUBLISHABLE_KEY=pk_live_your_actual_key
   STRIPE_SECRET_KEY=sk_live_your_actual_secret
   STRIPE_PRICE_ID_PAY_IN_FULL=price_1P...
   STRIPE_PRICE_ID_TWO_PAYMENTS=price_1P...
   STRIPE_PRICE_ID_THREE_PAYMENTS=price_1P...
   APP_URL=https://your-live-domain.com
   ```

### Step 2: Deploy the Backend Checkout Endpoint
* Deploy the `/api/create-checkout-session` endpoint using the sample provided in `src/lib/payments/server-endpoint-example.ts`.
* When a visitor selects Option 1, the frontend sends `{ planKey: "pay_in_full" }`.
* The server looks up `STRIPE_PRICE_ID_PAY_IN_FULL` securely and creates a Stripe Hosted Checkout Session.
* Set `STRIPE_CONFIG.isConfigured = true` in `src/lib/payments/stripe.ts`.

### Step 3: Test Mode Checklist
- [ ] Test Option 1 using Stripe Test Card (`4242 4242 4242 4242`). Verify redirect to success page.
- [ ] Test Option 2 and Option 3 checkout flow.
- [ ] Test mobile responsiveness during checkout.
- [ ] Confirm client has signed off on refund policy and instalment collection policy.

---

## 5. Local Commands (How to Run and Build)

* **Start Local Development Server**:
  ```bash
  npm run dev
  ```
  Runs at `http://localhost:3000` with hot-module reloading.

* **Build Production Bundle**:
  ```bash
  npm run build
  ```
  Compiles and outputs optimized static files to the `/dist` directory.

* **Preview Production Build**:
  ```bash
  npm run preview
  ```
  Runs the compiled production build locally for final verification.
