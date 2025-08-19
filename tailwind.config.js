/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brown: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#d2bab0',
          500: '#bfa094',
          600: '#a18072',
          700: '#977669',
          800: '#8b4513',
          900: '#744c41'
        },
        cream: {
          50: '#fefdfb',
          100: '#fef7e7',
          200: '#fdf0d5',
          300: '#fbe4b2',
          400: '#f8d082',
          500: '#f5deb3',
          600: '#e6c79a',
          700: '#d4a574',
          800: '#b8834d',
          900: '#9a6b3d'
        }
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'fade-in-up-delay': 'fadeInUp 0.8s ease-out 0.2s both',
        'fade-in-up-delay-2': 'fadeInUp 0.8s ease-out 0.4s both',
        'fade-in-up-delay-3': 'fadeInUp 0.8s ease-out 0.6s both',
        'slow-zoom': 'slowZoom 20s ease-in-out infinite alternate',
        'gradient-shift': 'gradientShift 3s ease-in-out infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'float-fast': 'float 3s ease-in-out infinite'
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        slowZoom: {
          '0%': {
            transform: 'scale(1.05)'
          },
          '100%': {
            transform: 'scale(1.1)'
          }
        },
        gradientShift: {
          '0%, 100%': {
            backgroundPosition: '0% 50%'
          },
          '50%': {
            backgroundPosition: '100% 50%'
          }
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)'
          },
          '50%': {
            transform: 'translateY(-20px)'
          }
        }
      }
    },
  },
  plugins: [],
};