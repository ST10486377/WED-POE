# 🚀 Rocket Resellers Website

Rocket Resellers is an independent sneaker, caps, and streetwear reseller brand based in South Africa.  
Our mission is to connect sneakerheads and fashion enthusiasts with authentic branded footwear and apparel — both new and pre-owned.

---

## 📌 Project Overview
This website was built to showcase Rocket Resellers’ products and provide customers with a smooth shopping experience.  
It includes:
- Sneaker, cap, and clothing listings
- Orders and shipping information
- Terms & Conditions
- Contact information

---

## 🎯 Features
- Responsive and modern design
- Product categories (Sneakers, Caps, Clothing)
- Easy-to-navigate layout
- Styled with custom CSS for creativity
- SEO-ready structure
- Orders and shipping details
- Terms & Conditions for transparency

RocketResellers/
│── index.html        # Homepage
│── style.css         # Custom CSS for styling
│── products.html     # Product listings
│── orders.html       # Orders & shipping info
│── terms.html        # Terms & Conditions
│── contact.html      # Contact details
│── assets/           # Images, logos, banners

🔑 Tech Stack
	•	HTML5
	•	CSS3
	•	JavaScript (optional future extension)
	•	Hosting via GitHub Pages / Netlify / custom hosting

content platforms for research and assets:
1. Unsplash (https://unsplash.com/) - Free stock images.
2. Pexels (https://pexels.com/) - Free photos and videos.
3. MDN Web Docs (https://developer.mozilla.org/) - Authoritative HTML, CSS, JS documentation.
4. W3Schools (https://w3schools.com/) - Beginner-friendly tutorials.
5. FreeCodeCamp (https://freecodecamp.org/) - Practice and reference for web projects.
REFERENCES:
del Pilar Salas-Zárate, M., Alor-Hernández, G., Valencia-García, R., Rodríguez-Mazahua, L., Rodríguez-González, A. and Cuadrado, J.L.L., 2015. Analyzing best practices on Web development frameworks: The lift approach. Science of Computer Programming, 102, pp.1-19.
Ranjan, A., Sinha, A. and Battewad, R., 2020. JavaScript for modern web development: building a web application using HTML, CSS, and JavaScript. BPB Publications.
Robbins, J.N., 2012. Learning web design: A beginner's guide to HTML, CSS, JavaScript, and web graphics. " O'Reilly Media, Inc.".
Jakus, G., Jekovec, M., Tomazic, S. and Sodnik, J., 2010. New technologies for web development. Elektrotehniški vestnik, 77(5), pp.273-280.

   
# PART 2 Continuation
# Rocket Resellers Website

## Improvements & Refinements
- Organized images into a dedicated folder.
- Ensured consistent styling across all pages using a single `style.css` file.
- Added responsive meta viewport for mobile compatibility.
- Linked all pages to the same stylesheet for consistent appearance.

## Changelog
- **2025-09-26**: Initial site setup with pages (index, about, contact, featured, shop, orders, terms).
- Future plans: Add `services.html` page, improve responsive design, and reorganize CSS/JS into subfolders.
## GITHUB LINK
Link 1 https://github.com/ST10486377/WED-POE 

# Rocket Resellers - Part 3

## Changelog - Part 3 enhancements (2025-11-19)
- Implemented JavaScript enhancements: accordion, lightbox, search filter, simple dynamic content and form validation. (assets/js/main.js)
- Added enquiry.html and contact.html forms with client-side validation and mailto compilation.
- Added robots.txt and sitemap.xml for SEO.
- Added basic CSS for form errors and lightbox. (assets/css/part3-enhancements.css)
- Updated site meta description tags on new pages for on-page SEO.
- Notes: Further SEO (keyword-rich content, backlinks) and server-side form handling recommended.

## Part 3 - Additional Enhancements
- Added Leaflet map example (locations.html).
- Added server stub (server/index.js) for handling contact/enquiry POST requests.
- Client-side forms now attempt AJAX POST to server stub at http://localhost:3000.
- Added structured data (JSON-LD) to pages and updated meta titles/descriptions.
- Accessibility & SEO checklist added (ACCESSIBILITY_SEO_CHECKLIST.md).

# Accessibility & SEO Checklist (automated + manual suggestions)
## Accessibility (A11y)
- [x] All images should have descriptive `alt` attributes. (Review required - many images may be missing alt text)
- [x] Landmark roles present for map region. (locations.html map has `role="region"` and aria-label)
- [ ] Ensure color contrast meets WCAG 2.1 AA for text and UI components.
- [ ] Provide skip-links for keyboard users (add `<a href="#main" class="skip">Skip to content</a>`).
- [ ] Form fields should be associated with `<label for="">` and inputs with `id` attributes for screen readers.
- [ ] Ensure focus states are visible and keyboard operable for accordion/lightbox elements.
- [ ] Run automated axe-core or Lighthouse accessibility scan for concrete issues.

## SEO (On-Page)
- [x] robots.txt present.
- [x] sitemap.xml generated and includes HTML pages.
- [x] Basic meta descriptions added to pages that lacked them.
- [x] JSON-LD WebPage structured data added to pages.
- [ ] Conduct keyword research and update page content and meta tags with target keywords.
- [ ] Add unique title/meta description per page (some were auto-updated; review for quality).
- [ ] Add `rel="canonical"` tags where needed.
- [ ] Add image `alt` attributes and compressed images for performance.
- [ ] Consider adding Open Graph (`og:`) and Twitter Card meta tags for social sharing.
- [ ] Implement HTTPS and set security headers at the server level.

## Performance / Security
- [ ] Minify CSS and JS; serve compressed files (GZIP/Brotli).
- [ ] Defer non-critical JS, move heavy scripts to bottom of page.
- [ ] Use caching headers and CDN for static assets.
- [ ] Add server-side validation and CAPTCHA for forms to prevent spam.
- [ ] Harden server with CSP, X-Frame-Options, HSTS headers.

Notes:
- Server stub is included at /server; to run: `cd server && npm install && npm start`.
- The AJAX form POSTs attempt http://localhost:3000 - change to your production API endpoint when available.



