# Agazh Avaiyam

## Project Summary
Agazh Avaiyam is a responsive, highly interactive front-end web application built to serve as the digital presence for "A Centre for Archaeological Excellence in Tamil Nadu." It aims to make archaeology engaging and accessible through heritage education, cultural programs, and fieldwork. The application features a premium aesthetic with smooth scrolling, complex animations, and an editorial-style design.

## Tech Stack
- **Frontend Framework:** React 19, Vite
- **Styling:** Tailwind CSS v4, PostCSS
- **Animations:** Framer Motion
- **Scrolling:** Lenis (Smooth Scroll)
- **Routing:** React Router DOM v7
- **Form Handling:** EmailJS (`@emailjs/browser`)
- **SEO & Meta Tags:** React Helmet Async, Vite Plugin Sitemap
- **Pre-rendering:** React Snap

## Main Features
- **Immersive Landing Page:** High-end UI with a luxury/heritage aesthetic, featuring smooth scrolling and advanced Framer Motion animations.
- **Dynamic Content Sections:** Well-structured sections detailing "About Us," "Our Purpose," "Heritage Programs," "Team Members," and "Events."
- **Interactive Components:** Custom elements like `ConnectOrb`, `HeritageAstrolabe`, and `ArtifactOrb` for visual engagement.
- **Contact Integration:** A fully functional contact form powered by EmailJS, allowing users to send queries directly to the organization's email without a backend.
- **SEO Optimized:** Comprehensive implementation of JSON-LD structured data (Organization, WebSite, EducationalOrganization, FAQ, BreadcrumbList) for search engine visibility. Pre-rendering enabled via React Snap for better indexing.
- **Content Protection:** Custom scripts to prevent right-clicking and inspecting the code.

## System Workflow
1. **Initial Load:** The user accesses the website, which loads the pre-rendered or static Vite build for fast First Contentful Paint (FCP).
2. **Navigation & Interaction:** Lenis handles smooth scrolling as the user navigates through the single-page application structure. Framer Motion triggers scroll-linked animations and entry effects as elements come into the viewport.
3. **Form Submission:** Users can interact with the contact form. On submission, the form data is securely transmitted directly to the organization's inbox via the EmailJS service.

## Database
- This project does not utilize a traditional backend database. All textual content, program details, and configurations are managed locally within the codebase.

## APIs
- **EmailJS API:** The only external service integrated is EmailJS. It is used in the `ContactUs.jsx` component to handle email submissions directly from the frontend securely using environment variables.

## Setup & Installation

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation Steps
1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd AgazhAvaiyamProject
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Variables:**
   Create a `.env` file in the root directory with the following variables for EmailJS functionality:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`.

5. **Build for production:**
   ```bash
   npm run build
   ```

## User Guide
- **Navigation:** Use the fixed top navigation bar to jump between sections like Home, About Us, Services, Events, and Contact.
- **Contacting:** Navigate to the "Contact Us" section to send a direct message, find social media links, or get contact numbers.
- **Exploration:** Scroll smoothly through the site to reveal content dynamically, learning about the various programs, team members, and the organization's mission.

## Challenges
- **Complex Animations:** Implementing performant, complex scroll-linked animations without causing jank or layout shifts across different devices.
- **Responsive Design:** Ensuring perfect responsiveness and asset rendering (like preventing image clipping) across mobile and tablet devices given the intricate UI designs.
- **SEO on a SPA:** Setting up proper SEO and pre-rendering (React Snap) for a dynamic single-page React application to ensure it is accurately indexed by search engine crawlers.

## Future Improvements
- **CMS Integration:** Integrating a Headless CMS (like Sanity or Strapi) to allow non-technical team members to update content (events, programs, team members) dynamically without modifying the source code.
- **Backend Infrastructure:** Implementing a lightweight backend (e.g., Supabase or Firebase) if user registrations for events or a newsletter subscription feature are added.
- **Performance Tuning:** Further optimizing image assets (converting all to WebP/AVIF) and implementing advanced code-splitting to reduce the initial bundle size.
- **Internationalization (i18n):** Adding multi-language support (e.g., Tamil and English) to reach a broader local audience.