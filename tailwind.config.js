/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#0A0A0A',
          charcoal: '#121212',
          surface: '#171717',
          surfaceLight: '#212121',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-gold': 'rgba(197, 166, 74, 0.28)',
          ivory: '#F7F3EB',
          'ivory-light': '#FAF7F2',
          'ivory-dark': '#EBE3D3',
          'ivory-card': '#FFFFFF',
          'ivory-text': '#1D1A16',
          'ivory-muted': '#6B645A',
          gold: '#C5A64A',
          'gold-light': '#D6BA62',
          'gold-dark': '#9E802A',
          'gold-bg': 'rgba(197, 166, 74, 0.08)',
        }
      },
      fontFamily: {
        sans: ['Poppins', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
        body: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'fluid-hero': 'clamp(2.25rem, 1.8rem + 3.2vw, 4.25rem)',
        'fluid-h2': 'clamp(1.75rem, 1.4rem + 2vw, 3rem)',
        'fluid-h3': 'clamp(1.25rem, 1.1rem + 1vw, 1.75rem)',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '110rem',
        'wide': '150rem',
      },
      screens: {
        'xs': '420px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
        'wide': '2400px',
      },
      boxShadow: {
        'gold-glow': '0 0 35px -5px rgba(197, 166, 74, 0.18)',
        'subtle': '0 4px 20px -2px rgba(0, 0, 0, 0.3)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.04)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 6s ease-in-out infinite',
        fadeIn: 'fadeIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
    },
  },
  plugins: [],
}
