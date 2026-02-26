# Developer Quick Reference Guide

## 🚀 Quick Start

```bash
# Install
npm install

# Copy logo
cp embsys_logo.png public/embsys_logo.png

# Run
npm run dev

# Build
npm run build

# Deploy
npm start
```

## 📁 Key File Locations

| What | Where |
|------|-------|
| Homepage | `app/page.js` |
| Product Page | `app/product/page.js` |
| Contact Form | `app/contact/page.js` |
| Global Styles | `app/globals.css` |
| Tailwind Config | `tailwind.config.js` |
| Navbar Component | `components/Navbar.jsx` |
| Footer Component | `components/Footer.jsx` |
| Logo Asset | `public/embsys_logo.png` |

## 🎨 Color System

```javascript
// Primary Colors (tailwind.config.js)
colors: {
  dark: {
    bg: '#0B1120',        // Main background
    card: '#112240',      // Card background
    border: '#203355',    // Border color
    text: '#E2E8F0',      // Text color
  },
  brand: {
    primary: '#2563EB',   // Blue
    accent: '#06B6D4',    // Cyan
  }
}
```

## 🏗️ Common Changes

### Change Brand Colors

Edit `tailwind.config.js`:
```javascript
colors: {
  brand: {
    primary: '#YOUR_COLOR',
    accent: '#YOUR_ACCENT',
  }
}
```

### Update Company Info

Edit `components/Footer.jsx` and `app/contact/page.js`:
```javascript
// Phone
<a href="tel:+919944865029">YOUR_NUMBER</a>

// Email
<a href="mailto:kk@embsysai.com">YOUR_EMAIL</a>

// Address
"YOUR ADDRESS HERE"
```

### Add New Page

1. Create folder: `app/newpage/`
2. Create file: `app/newpage/page.js`
3. Add to navbar: `components/Navbar.jsx`
4. Navbar links array:
```javascript
{ href: '/newpage', label: 'New Page' }
```

### Modify Content

All page content is JSX, edit directly:
```javascript
// Change headline
<h1>Your New Headline</h1>

// Change description
<p>Your new description</p>

// Change buttons
<Link href="/newpage">Button Text</Link>
```

### Change Fonts

Edit `app/globals.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@400;600&display=swap');

body {
  font-family: 'YourFont', sans-serif;
}
```

### Add Images

1. Place image in `public/` folder
2. Import and use:
```javascript
import Image from 'next/image'

<Image 
  src="/image-name.png" 
  alt="Description"
  width={400}
  height={300}
/>
```

### Update Contact Form Fields

Edit `app/contact/page.js`:
```javascript
// Add new field
<input {...register('newfield')} />

// Add validation
register('newfield', { required: 'Error message' })

// Update form submission
const onSubmit = (data) => {
  console.log(data.newfield)
}
```

## 🎯 Component Usage

### Button Component
```javascript
<Link href="/page" className="btn-gradient">
  Click Me
</Link>
```

### Glass Card Component
```javascript
<div className="glass rounded-2xl p-8">
  Content
</div>
```

### Section with Animation
```javascript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Animated Content
</motion.div>
```

### Icon Usage
```javascript
import { IconName } from 'lucide-react'

<IconName size={24} className="text-dark-text" />
```

## 📱 Responsive Classes

```tailwind
// Mobile first
p-4              // All screens
md:p-8           // Screens >= 768px
lg:p-12          // Screens >= 1024px
xl:p-16          // Screens >= 1280px

// Grid example
grid-cols-1      // 1 column (mobile)
md:grid-cols-2   // 2 columns (tablet)
lg:grid-cols-3   // 3 columns (desktop)
```

## 🎯 CSS Classes Reference

```css
/* Glass Effect */
.glass                    /* Frosted glass card */
.glass-accent            /* Glass with accent border */

/* Buttons */
.btn-gradient            /* Gradient button */

/* Glows */
.glow-text               /* Text glow */
.glow-border             /* Glow border */
.glow-accent-border      /* Accent glow */

/* Animations */
.animate-fade-in         /* Fade in */
.animate-slide-up        /* Slide up */
.animate-glow-pulse      /* Glow pulse */

/* Transitions */
.transition-all          /* Smooth transition */
```

## 🧪 Testing

### Navigate Pages
```
http://localhost:3000/               # Home
http://localhost:3000/product        # Product
http://localhost:3000/solutions      # Solutions
http://localhost:3000/workflow       # Workflow
http://localhost:3000/company        # Company
http://localhost:3000/contact        # Contact
```

### Test Form Validation
- Empty fields show error messages
- Invalid email shows error
- Success message after submit

### Test Responsiveness
- Use browser DevTools
- Check mobile (375px), tablet (768px), desktop (1024px)

## 🔧 Debugging

### Common Issues & Fixes

**Logo not showing?**
```bash
cp embsys_logo.png public/embsys_logo.png
npm run dev
```

**Styles not applied?**
```bash
rm -rf .next
npm run dev
```

**Form not working?**
- Check browser console for errors
- Verify form fields have `{...register()}`

**Animations not smooth?**
- Check performace tab in DevTools
- Reduce animation count if hundreds occur

## 📊 Project Metrics

- Pages: 6
- Components: 2
- Animations: 50+
- Icons: 30+
- Total Size: ~2-3MB (after build)
- Bundle Size: ~100KB (gzip compressed)
- Lighthouse Score: 90+ (target)

## 🚀 Deployment Checklist

```
- [ ] npm install
- [ ] npm run build (no errors)
- [ ] Logo in public folder
- [ ] Tested all links
- [ ] Tested on mobile
- [ ] Contact form works
- [ ] Updated contact info
- [ ] Set environment variables
- [ ] Deploy to Vercel/hosting
- [ ] Setup domain
- [ ] Enable SSL
- [ ] Monitor performance
```

## 📚 Resources

**Next.js**: https://nextjs.org/docs
**Tailwind**: https://tailwindcss.com/docs
**Framer Motion**: https://www.framer.com/motion/
**React**: https://react.dev

## 💡 Pro Tips

1. **Use DevTools**: F12 → Toggle Device Toolbar for mobile testing
2. **Hot Reload**: Changes auto-reload during `npm run dev`
3. **CSS Classes**: Tailwind has 10,000+ utility classes
4. **Icons**: Browse at https://lucide.dev
5. **Animations**: Common presets in Framer Motion docs
6. **Colors**: Use official Tailwind color picker
7. **Performance**: Run Lighthouse regularly

## 🆘 Getting Help

- Check docs folder (README.md, SETUP.md, DEPLOYMENT.md)
- Search Next.js docs
- Visit Tailwind CSS docs
- Check browser console for errors
- Contact: kk@embsysai.com

---

**v1.0.0 | February 2026**
