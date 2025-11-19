
# Accessibility & SEO Checklist (automated + manual suggestions)

Generated: 2025-11-19T18:22:25.170018

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
