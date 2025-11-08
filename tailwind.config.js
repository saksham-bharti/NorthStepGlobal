/** @type {import('tailwindcss').Config} */
import forms from '@tailwindcss/forms'
import animate from 'tailwindcss-animate'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: 'var(--color-border)', // gray-200
        input: 'var(--color-input)', // white
        ring: 'var(--color-ring)', // orange-500
        background: 'var(--color-background)', // white
        foreground: 'var(--color-foreground)', // gray-900
        primary: {
          DEFAULT: 'var(--color-primary)', // orange-500
          foreground: 'var(--color-primary-foreground)' // white
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)', // yellow-500
          foreground: 'var(--color-secondary-foreground)' // gray-900
        },
        destructive: {
          DEFAULT: 'var(--color-destructive)', // red-500
          foreground: 'var(--color-destructive-foreground)' // white
        },
        muted: {
          DEFAULT: 'var(--color-muted)', // gray-50
          foreground: 'var(--color-muted-foreground)' // gray-500
        },
        accent: {
          DEFAULT: 'var(--color-accent)', // orange-600
          foreground: 'var(--color-accent-foreground)' // white
        },
        popover: {
          DEFAULT: 'var(--color-popover)', // white
          foreground: 'var(--color-popover-foreground)' // gray-900
        },
        card: {
          DEFAULT: 'var(--color-card)', // gray-50
          foreground: 'var(--color-card-foreground)' // gray-900
        },
        success: {
          DEFAULT: 'var(--color-success)', // emerald-500
          foreground: 'var(--color-success-foreground)' // white
        },
        warning: {
          DEFAULT: 'var(--color-warning)', // amber-500
          foreground: 'var(--color-warning-foreground)' // white
        },
        error: {
          DEFAULT: 'var(--color-error)', // red-500
          foreground: 'var(--color-error-foreground)' // white
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        accent: ['Playfair Display', 'serif']
      },
      fontSize: {
        // Display sizes for hero sections
        'display-2xl': ['4.5rem', { lineHeight: '1.05', fontWeight: '700' }],
        'display-xl': ['3.75rem', { lineHeight: '1.05', fontWeight: '700' }],
        'display-lg': ['3rem', { lineHeight: '1.1', fontWeight: '700' }],
        'display-md': ['2.25rem', { lineHeight: '1.15', fontWeight: '700' }],
        'display-sm': ['1.875rem', { lineHeight: '1.2', fontWeight: '700' }],

        // Heading sizes
        'heading-2xl': ['2.5rem', { lineHeight: '1.2', fontWeight: '600' }],
        'heading-xl': ['2rem', { lineHeight: '1.25', fontWeight: '600' }],
        'heading-lg': ['1.75rem', { lineHeight: '1.3', fontWeight: '600' }],
        'heading-md': ['1.5rem', { lineHeight: '1.35', fontWeight: '600' }],
        'heading-sm': ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }],
        'heading-xs': ['1.125rem', { lineHeight: '1.45', fontWeight: '600' }],

        // Body text sizes
        'body-xl': ['1.25rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7', fontWeight: '400' }],
        'body-md': ['1rem', { lineHeight: '1.7', fontWeight: '400' }],
        'body-sm': ['0.875rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body-xs': ['0.75rem', { lineHeight: '1.5', fontWeight: '400' }],

        // UI text sizes
        'ui-lg': ['1.125rem', { lineHeight: '1.4', fontWeight: '500' }],
        'ui-md': ['1rem', { lineHeight: '1.4', fontWeight: '500' }],
        'ui-sm': ['0.875rem', { lineHeight: '1.4', fontWeight: '500' }],
        'ui-xs': ['0.75rem', { lineHeight: '1.4', fontWeight: '500' }],

        // Legacy brand sizes (to be phased out)
        'brand-hero': ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'brand-headline': ['2.25rem', { lineHeight: '1.2', fontWeight: '600' }],
        'brand-subheading': ['1.25rem', { lineHeight: '1.4', fontWeight: '500' }]
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem'
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'gradient-flow': 'gradientFlow 3s ease-in-out infinite',
        'counter-up': 'counterUp 2.5s ease-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        },
        gradientFlow: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        },
        counterUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        }
      },
      backgroundSize: {
        '300%': '300%'
      },
      boxShadow: {
        'brand': '0 4px 16px rgba(0, 0, 0, 0.1), 0 8px 32px rgba(255, 149, 0, 0.05)',
        'brand-hover': '0 8px 24px rgba(0, 0, 0, 0.15), 0 16px 48px rgba(255, 149, 0, 0.1)',
        'elevation': '0 8px 32px rgba(255, 149, 0, 0.2)'
      },
      backdropBlur: {
        xs: '2px'
      }
    },
    typography: {
      // Typography scale classes
      DEFAULT: {
        css: {
          h1: {
            fontSize: '2.5rem',
            fontWeight: '600',
            lineHeight: '1.2',
            marginBottom: '1rem'
          },
          h2: {
            fontSize: '2rem',
            fontWeight: '600',
            lineHeight: '1.25',
            marginBottom: '0.875rem'
          },
          h3: {
            fontSize: '1.75rem',
            fontWeight: '600',
            lineHeight: '1.3',
            marginBottom: '0.75rem'
          },
          h4: {
            fontSize: '1.5rem',
            fontWeight: '600',
            lineHeight: '1.35',
            marginBottom: '0.625rem'
          },
          p: {
            fontSize: '1rem',
            lineHeight: '1.7',
            marginBottom: '1rem'
          },
          'p:last-child': {
            marginBottom: '0'
          }
        }
      }
    }
  },
  plugins: [forms, animate],
}