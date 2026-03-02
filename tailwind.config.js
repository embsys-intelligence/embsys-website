/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: 'var(--color-bg)',
          surface: 'var(--color-surface)',
          card: 'var(--color-card)',
          border: 'var(--color-border)',
          text: 'var(--color-text)',
          muted: 'var(--color-muted)',
        },
        brand: {
          primary: '#3B82F6',
          accent: '#06B6D4',
          glow: '#2563EB',
          purple: '#8B5CF6',
        },
      },
      fontFamily: {
        sans: ['var(--font-jakarta)', 'sans-serif'],
        display: ['var(--font-outfit)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)',
        'gradient-brand-reverse': 'linear-gradient(135deg, #06B6D4 0%, #3B82F6 100%)',
        'gradient-purple': 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0A0F1C 0%, #111827 100%)',
        'gradient-card': 'linear-gradient(135deg, rgba(59,130,246,0.08) 0%, rgba(6,182,212,0.08) 100%)',
        'gradient-card-hover': 'linear-gradient(135deg, rgba(59,130,246,0.12) 0%, rgba(6,182,212,0.12) 100%)',
        'gradient-radial': 'radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(59,130,246,0.12), transparent 40%)',
      },
      boxShadow: {
        glow: '0 0 30px rgba(59,130,246,0.25)',
        'glow-accent': '0 0 30px rgba(6,182,212,0.25)',
        'glow-lg': '0 0 60px rgba(59,130,246,0.3)',
        'glow-purple': '0 0 30px rgba(139,92,246,0.25)',
        'card-hover': '0 25px 50px rgba(0,0,0,0.4), 0 0 30px rgba(59,130,246,0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.4s ease-out',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 2s',
        'blob': 'blob 7s infinite',
        'spin-slow': 'spin 8s linear infinite',
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
        'bounce-gentle': 'bounceGentle 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(59,130,246,0.2)' },
          '50%': { boxShadow: '0 0 50px rgba(59,130,246,0.5)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
}
