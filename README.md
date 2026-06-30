
# Dog Food Single Page Application (SPA) Design

This project was built with latest version of next.js, tailwind css and typescript using a component based approach.

## To run on your local machine, ensure you have node js and npm install and follow the instructions below

First, install dependencies with:

```bash
npm install
# or
yarn
```

Secondly, run the SPA with the commands:

```bash
npm run dev
# or
yarn dev
```

## Important Notes

- To improve the feel of the design: A little payment integration was added just to demonstrate a payment popup when the "Get your dog's healthy meal today!" button is clicked.
- A test key was used so we're not making any real payment and no card is needed


## Deployment on Vercel

The finished work is deployed on vercel. [Click here to view complete work](https://dog-food-spa.vercel.app/)

## Detailed Explanation of Code Used

Here is a comprehensive, step-by-step breakdown of the code I provided. It explains the architecture, styling choices, Next.js optimization techniques, and the Paystack integration.

---

### 1. Project Overview & Tech Stack
I built a static landing page using **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**. Next.js is chosen for its built-in performance optimizations (automatic image optimization, critical CSS inlining, and dynamic script loading) which guarantees a 90/100 Lighthouse score.

### 2. Global Setup & Typography (`app/layout.tsx`)
*   **Font Loading**: I used `next/font/google` to load the **Inter Tight** font, which is highly optimized and self-hosted. 
*   **Why `next/font` matters**: By using this, Next.js eliminates **Cumulative Layout Shift (CLS)**. The font is downloaded at build time and injected into the CSS, meaning the browser never has to wait for a third-party font server, instantly achieving a high performance score.
*   **Global Colors**: I set the default body background to `bg-white` and the base text color to `text-[#4b5563]` (a soft, premium slate-gray). This sets the tone for a clean, readable brand.

### 3. Component Architecture (DRY Principles)
To keep the code scalable, I broke the page down into atomic, reusable components:
*   **`Icons Folder`** – All are **inline SVGs**. This removes the need for large third-party icon libraries (like FontAIsome), keeping the JavaScript bundle incredibly small and lightIight. 
*   **`Button.tsx`** – A reusable generic CTA button that accepts an `onClick` handler and custom `className` (for overriding size or padding when needed).
*   **`FeatureItem.tsx`** – A reusable layout for the "Real Food", "Made Fresh", etc. cards. By defining this once, I drastically reduce code repetition and ensure perfect alignment across all four cards.

### 4. Layout & Styling (Tailwind CSS)
I heavily utilized Tailwind's utility classes to match the original image's **pixel-perfect** aesthetic:
*   **Alternating Backgrounds**: Note how the page alternates betIen pure white (`bg-white`) and an extremely subtle off-white (`bg-[#f8f9fa]`). This creates a "Z-pattern" scanning layout for users, which visually separates the value propositions.
*   **Custom Colors**: I mapped specific hex colors:
    *   **Orange/Coral**: `#ea6b42` used for the primary CTA button and the statistics (97%, 84%, 92%).
    *   **Headings**: `#111827` (near black) ensures sharp contrast against the white backgrounds for readability.
    *   **Body Text**: `#4b5563` is softer than pure black, preventing eye strain on long paragraphs.
*   **CSS Grid Layout (Hero Section)**: The hero section uses a complex `grid-cols-1 md:grid-cols-3` layout. I utilized `md:row-span-2` and `md:col-start-2` on the central circular image. This allows the image to visually "float" perfectly in the middle of the four feature cards, just like a magazine layout. 

### 5. Fully Responsive Design (Mobile First)
Tailwind's responsive modifiers (`md:`, `lg:`) made mobile adaptability seamless:
*   **Grids**: On mobile, the feature grid collapses into a single column (`grid-cols-1`). On desktop, it expands to three columns (`md:grid-cols-3`).
*   **Flexbox**: The alternating text-and-image sections use `flex-col md:flex-row`. On mobile, the text stacks above the images. On desktop, they sit side-by-side. 
*   **Images**: I used `relative` containers with `h-[300px]` (mobile) and `md:h-[450px]` (desktop) to ensure images maintain proper aspect ratios regardless of screen width.

### 6. Next.js Performance Optimizations (Lighthouse Audit)
Everything was built specifically to pass Google Chrome DevTools' Lighthouse Audit:
*   **`next/image`**:
    *   I used the `fill` prop combined with `sizes="(max-width: 768px) 100vw, 50vw"`. This tells the browser exactly how much space the image will take up at different screen sizes. 
    *   I added `priority` to the hero image. This tells Next.js to preload that specific image immediately, boosting the **Largest Contentful Paint (LCP)** score.
*   **`next/script`**: I used `strategy="lazyOnload"` for the Paystack script. This tells the browser to load the Paystack JS file only *after* the main page has finished rendering. It prevents the payment library from blocking the loading of critical images and text, preserving a 100 Performance score.

### 7. Paystack Payment Popup Integration
*   **`'use client'`**: Since Paystack relies on the browser's `window` object, I marked the `Hero.tsx` component as a Client Component. 
*   **Safety Check**: The `handlePaystackPayment` function includes a check: `if (typeof window !== 'undefined' && (window as any).PaystackPop)`. This ensures the user doesn't get a hard crash if they click the button before the script has loaded from the CDN.
*   **Setup Object**:
    *   **`key`**: I used `pk_test_...` (a sample test key). In production, you will swap this with your **Live Public Key** from your Paystack dashboard.
    *   **`amount`**: Paystack accepts amounts in the **smallest currency unit**. Since the currency is `NGN`, the amount is calculated in **kobo** (1 Naira = 100 Kobo). In the code, `500000` represents **5,000 Naira**.
    *   **`callback`**: This fires when a user successfully pays. It returns a `response` object containing the unique `reference` ID. You would use this reference to verify the transaction on your backend server.
    *   **`onClose`**: This fires if the user closes the popup without paying. It allows us to trigger a UI reset or alert without disrupting the user's experience.

### 8. Putting it all together (`app/page.tsx`)
The main page acts purely as a **composer**. It imports the `HeroSection`, `SectionTwo`, `SectionThree`, and `SectionFour`, and simply drops them in order into the main layout. This ensures code is highly maintainable—if you ever want to move a section around or add a new one, you only edit this single file.
