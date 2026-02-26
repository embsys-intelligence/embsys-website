# Embsys Intelligence - Industrial AI Visual Inspection Platform

A premium, enterprise-grade website for Embsys Intelligence Pvt Ltd, an industrial AI company providing Agentic AI Powered Visual Inspection and Automation solutions.

## 🚀 Features

- **Modern Dark Theme**: Glassmorphism design with gradient accents
- **Smooth Animations**: Framer Motion animations throughout
- **Enterprise Design**: Premium Silicon Valley AI product company aesthetic
- **Responsive**: Mobile-first approach with perfect responsiveness
- **Production Ready**: Optimized for performance and SEO
- **Dark Mode Only**: Dark modern theme (#0B1120 background)

## 🏗️ Project Structure

```
embsys_website/
├── app/
│   ├── page.js                 # Home page
│   ├── product/
│   │   └── page.js            # Product page
│   ├── solutions/
│   │   └── page.js            # Solutions page
│   ├── workflow/
│   │   └── page.js            # Workflow page
│   ├── company/
│   │   └── page.js            # Company page
│   ├── contact/
│   │   └── page.js            # Contact page
│   ├── layout.js              # Root layout
│   └── globals.css            # Global styles
├── components/
│   ├── Navbar.jsx             # Sticky navigation bar
│   └── Footer.jsx             # Footer component
├── public/
│   └── embsys_logo.png        # Company logo
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
└── README.md
```

## 📄 Pages

### 1. **Home** (`/`)
- Hero section with headline and CTA buttons
- Quick 3-step setup section
- Key features showcase
- Wide applications section
- Final CTA section

### 2. **Product** (`/product`)
- Product overview
- Hardware components (AI Camera, Edge Controller)
- Software components (AI Inspection Software, Agentic AI Platform)
- Platform features
- Inspection dashboard mockup

### 3. **Solutions** (`/solutions`)
- Six solution cards (Manufacturing, Jewelry, Assembly, QC, Barcode, Robotics)
- Industry benefits and metrics
- Industry use cases
- Consultation CTA

### 4. **Workflow** (`/workflow`)
- 5-step AI training and deployment workflow
- Timeline visualization
- Process benefits
- Deployment timeline metrics

### 5. **Company** (`/company`)
- Company overview
- Mission and vision
- Why choose Embsys
- Office location and contact
- Company culture

### 6. **Contact** (`/contact`)
- Contact form with validation
- Contact information (phone, email, address)
- Business hours
- FAQ section
- Demo scheduling CTA

## 🎨 Design System

### Colors
- **Background**: #0B1120
- **Primary**: #2563EB
- **Accent**: #06B6D4
- **Text**: #E2E8F0 (Light Gray)
- **Dark Card**: #112240
- **Dark Border**: #203355

### Typography
- **Font Stack**: Inter, Poppins, SF Pro Display
- **Weights**: 300, 400, 500, 600, 700

### Effects
- Glassmorphism (#112240 @ 0.4 opacity with 10px blur)
- Gradient buttons (Primary to Accent)
- Smooth animations (0.3s - 0.8s)
- Glow effects on hover
- Soft shadows

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form
- **Font**: Google Fonts (Poppins, Inter)

## 📦 Installation

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Setup

1. Navigate to project directory:
```bash
cd embsys_website
```

2. Install dependencies:
```bash
npm install
```

3. Add the logo image to public folder:
   - Place `embsys_logo.png` in the root directory and it will be referenced as `/embsys_logo.png`

## 🚀 Development

Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Building for Production

Build the project:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

## 🌐 Navigation

### Global Navbar
- **Logo** (left)
- **Menu** (center): Home, Product, Solutions, Workflow, Company, Contact
- **CTA Button** (right): Request Demo

### Global Footer
- **Logo & Description** (left)
- **Quick Links** (center)
- **Contact Info** (right)
- **Copyright** (bottom)

## 💡 Key Components

### Navbar (`components/Navbar.jsx`)
- Sticky positioning with glass effect
- Mobile hamburger menu
- Gradient CTA button
- Logo with badge effect

### Footer (`components/Footer.jsx`)
- Three-column layout
- Contact information with icons
- Quick navigation links
- Copyright notice

## 🎯 UI Features

- **Smooth Scroll**: HTML `scroll-behavior: smooth`
- **Hover Effects**: Glow effects and border transitions
- **Glass Cards**: Backdrop blur with gradient borders
- **Animations**: Fade-in, slide-up, and glow pulse effects
- **Responsive Design**: Mobile-first approach
- **Accessibility**: Semantic HTML and ARIA labels

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ✨ Special Features

1. **Sticky Navbar**: Fixed at top with glass morphism
2. **Form Validation**: Email, required fields, etc.
3. **Success Message**: Contact form displays success state
4. **Smooth Scrolling**: All internal links use smooth scroll
5. **Dark Mode Only**: High-contrast dark theme
6. **Motion Animations**: Framer Motion for entrance animations
7. **Gradient Text**: CSS gradient text for major headings

## 🔒 Production Ready

- SEO optimized
- Mobile responsive
- Performance optimized
- Accessibility compliant
- Security best practices
- Error handling implemented

## 📞 Contact Information

- **Phone**: +91 9944865029
- **Email**: kk@embsysai.com
- **Address**: 19A, Dr. VSI Estate Phase II, Tharamani, Chennai, Tamil Nadu – 600041, India

## 📄 License

All rights reserved © 2026 Embsys Intelligence Pvt Ltd.

## 🤝 Support

For any questions or support, please contact our team using the contact form on the website or reach out directly:
- Email: kk@embsysai.com
- Phone: +91 9944865029

---

Built with ❤️ using Next.js and Tailwind CSS
