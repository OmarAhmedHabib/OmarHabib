# TODO: Modernize Next.js Portfolio UI

## 1. Install Dependencies
- [x] Install `next-themes` for dark/light mode toggle
- [x] Install `next-intl` for internationalization (Arabic/English)

## 2. Configure Tailwind and Fonts
- [x] Update `tailwind.config.js` for dark mode class strategy
- [x] Update `src/app/globals.css` to import Google Fonts (Inter + Cairo)
- [x] Add theme-aware styles in globals.css

## 3. Set Up Translations
- [ ] Create `src/locales/en.json` with English translations
- [ ] Create `src/locales/ar.json` with Arabic translations
- [ ] Create `src/i18n.ts` for next-intl configuration

## 4. Update Layout and Providers
- [ ] Update `src/app/layout.tsx` to wrap with ThemeProvider and LanguageProvider
- [ ] Add dynamic `lang` and `dir` attributes to `<html>`
- [ ] Import and apply fonts in layout.tsx

## 5. Update Navbar Component
- [ ] Add dark/light mode toggle button in `src/components/Navbar.tsx`
- [ ] Add language switcher dropdown/toggle
- [ ] Update navbar styles for themes and responsiveness
- [ ] Replace static text with translation keys

## 6. Update Header Component
- [ ] Update `src/components/Header.tsx` styles for dark/light themes
- [ ] Replace static text with translation keys
- [ ] Ensure animations and gradients work in both themes

## 7. Update Page Components
- [ ] Update `src/app/page.tsx` for themes, translations, and modern styles
- [ ] Update other pages (about, contact, projects, etc.) similarly
- [ ] Update component files (Skills, Projects, etc.) for consistency

## 8. Ensure Responsiveness and Consistency
- [ ] Test and adjust all components for mobile-first responsiveness
- [ ] Ensure consistent gradients, shadows, and spacing across components
- [ ] Add hover effects and smooth transitions

## 9. Testing and Final Touches
- [ ] Test dark/light mode toggle functionality
- [ ] Test language switcher (Arabic RTL layout)
- [ ] Verify all text is translated and UI looks modern
- [ ] Run the app and check for any issues
