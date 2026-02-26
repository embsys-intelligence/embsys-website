# Embsys Intelligence Website - Setup Instructions

## Quick Start Guide

### 1. Install Dependencies

```bash
npm install
```

This will install all required packages:
- Next.js 14
- React 18
- Tailwind CSS
- Framer Motion (animations)
- Lucide React (icons)
- React Hook Form (form validation)

### 2. Logo Setup

The `embsys_logo.png` file should be placed in the `public/` folder:
```
project_root/
└── public/
    └── embsys_logo.png
```

Copy the logo from the root directory to the public folder:
```bash
cp embsys_logo.png public/embsys_logo.png
```

### 3. Run Development Server

```bash
npm run dev
```

The website will be available at: [http://localhost:3000](http://localhost:3000)

### 4. Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
embsys_website/
├── app/                          # Next.js app router
│   ├── page.js                  # Home page
│   ├── layout.js                # Root layout
│   ├── globals.css              # Global styles
│   ├── product/
│   │   └── page.js              # Product page
│   ├── solutions/
│   │   └── page.js              # Solutions page
│   ├── workflow/
│   │   └── page.js              # Workflow page
│   ├── company/
│   │   └── page.js              # Company page
│   └── contact/
│       └── page.js              # Contact page
├── components/                   # Reusable components
│   ├── Navbar.jsx               # Navigation bar
│   └── Footer.jsx               # Footer
├── public/                       # Static assets
│   └── embsys_logo.png          # Company logo
├── package.json
├── tailwind.config.js           # Tailwind configuration
├── postcss.config.js            # PostCSS configuration
├── next.config.js               # Next.js configuration
├── .eslintrc.json               # ESLint configuration
├── .gitignore                   # Git ignore rules
└── README.md                    # Project documentation
```

## Design Specifications

### Color Palette
- **Background**: #0B1120 (Dark blue-black)
- **Primary**: #2563EB (Blue)
- **Accent**: #06B6D4 (Cyan)
- **Text**: #E2E8F0 (Light gray)
- **Card**: #112240 (Dark blue)
- **Border**: #203355 (Lighter dark blue)

### Fonts
- Primary: Inter, Poppins, SF Pro Display
- All fonts are imported from Google Fonts

### Effects
- **Glassmorphism**: 10px blur with 0.4 opacity backgrounds
- **Animations**: Framer Motion with 0.3-0.8s durations
- **Gradients**: Linear gradients on buttons and text
- **Shadows**: Glow effects with 20-40px blur

## Pages Overview

| Page | Route | Purpose |
|------|-------|---------|
| Home | `/` | Main landing page with hero and features |
| Product | `/product` | Product details and specifications |
| Solutions | `/solutions` | Industry solutions and use cases |
| Workflow | `/workflow` | AI training and deployment process |
| Company | `/company` | About company, mission, vision |
| Contact | `/contact` | Contact form and information |

## Features Implemented

✅ **Dark Modern Theme**: Dark blue background with gradient accents
✅ **Glassmorphism**: Frosted glass effect on cards
✅ **Smooth Animations**: Framer Motion animations on all sections
✅ **Gradient Buttons**: Linear gradient CTAs with hover effects
✅ **Sticky Navbar**: Fixed navigation with logo and menu
✅ **Responsive Design**: Mobile-first approach
✅ **Contact Form**: Full form validation with React Hook Form
✅ **Icons**: Modern icons from Lucide React
✅ **SEO Optimized**: Meta tags and semantic HTML
✅ **Production Ready**: Optimized for performance

## Customization

### Changing Colors

Edit `tailwind.config.js` colors section:
```js
colors: {
  dark: {
    bg: '#0B1120',
    card: '#112240',
    // ... more colors
  },
}
```

### Changing Fonts

Update font imports in `app/globals.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@400;600&display=swap');
```

### Modifying Content

All page content is in the respective `page.js` files. Edit the content directly in these files.

## Troubleshooting

### Logo Not Showing
- Ensure `embsys_logo.png` is in the `public/` folder
- Restart the development server
- Clear browser cache

### Styles Not Applied
- Clear `.next/` folder and rebuild
- Ensure Tailwind CSS is properly installed
- Check that `globals.css` is imported in `layout.js`

### Form Not Working
- Ensure `react-hook-form` is installed
- Check browser console for errors
- Verify form endpoint configuration

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Other Hosting
```bash
npm run build
# Deploy the .next folder and public folder
```

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: iOS Safari 12+, Android Chrome 90+

## Performance Tips

1. Images are optimized with Next.js Image component
2. CSS is purged automatically by Tailwind
3. JS is minified and tree-shaken in production
4. Static assets are cached with long TTL
5. API routes can be added for backend functionality

## Support & Contact

- **Email**: kk@embsysai.com
- **Phone**: +91 9944865029
- **Address**: Embsys Intelligence Pvt Ltd, Chennai, Tamil Nadu, India

---

**Last Updated**: February 2026
**Version**: 1.0.0
**Status**: Production Ready ✅
