/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#F0F4FA',
          100: '#DCE4F2',
          200: '#BACAE5',
          300: '#94ACD6',
          400: '#5A7DBA',
          500: '#2A5298',
          600: '#1B3C73',
          700: '#152C55',
          800: '#101F3C', // Primary Navy Blue
          900: '#0B1528',
          950: '#060B15',
          DEFAULT: '#101F3C',
        },
        coral: {
          50: '#FFF5F4',
          100: '#FDE8E7',
          200: '#FCD4D2',
          300: '#F8B1AE',
          400: '#F1807B',
          500: '#E6534B', // Secondary Reddish Coral
          600: '#CF3B33',
          700: '#A92B24',
          800: '#8C2620',
          900: '#74231E',
          DEFAULT: '#E6534B',
        },
        surface: {
          light: '#F5F7FA', // Light background
          DEFAULT: '#FFFFFF',
          dark: '#172033', // Dark text/surface
          muted: '#667085', // Muted text
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(16, 31, 60, 0.08)',
        'card-hover': '0 12px 30px -4px rgba(16, 31, 60, 0.16)',
        'coral-glow': '0 4px 25px rgba(230, 83, 75, 0.35)',
        'navy-glow': '0 8px 30px rgba(16, 31, 60, 0.25)',
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 2.5s infinite',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.03)', opacity: '0.92' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
};

