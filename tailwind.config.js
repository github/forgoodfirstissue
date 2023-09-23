// eslint-disable-next-line @typescript-eslint/no-var-requires
const { fontFamily } = require('tailwindcss/defaultTheme')


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  prefix: '',
  important: false,
  separator: ':',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
      },
    },
    colors: {
      transparent: 'transparent',
      primary: '#52575c',
      secondary: '#67bd41',
      juniper: '#67bd41',
      light_juniper: '#83f251',
      slate: '#52575c',
      honey: '#f6d87c',
      vanilla: {
        100: '#ffffff',
        200: '#f5f5f5',
        300: '#eeeeee',
        400: '#c0c1c3'
      },
      gray: {
        300: '#D1D5DB'
      },
      indigo: {
        50: '#FAFAFF',
        600: '#604FDD',
      },
      ink: {
        100: '#373c49',
        200: '#2c303a',
        300: '#21242c',
        400: '#16181d'
      },
      slate: {
        700: '#334155'
      },
      neutral: {
        200: '#E5E5E5'
      },
      violet: {
        50: '#F1F0FF',
        100: '#E9E7FF'
      },
      zinc: {
        900: '#3A3A62'
      }
    },
    borderRadius: {
      none: '0',
      sm: '0.125rem',
      md: '0.25rem',
      lg: '0.375rem',
      full: '9999px'
    },
    borderWidth: {
      DEFAULT: '1px',
    },
    fontFamily: {
      sans: ['Inter'],
      serif: ['Georgia', 'serif'],
      mono: ['Menlo', 'monospace']
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.25rem',
      xl: '1.375rem',
      '2xl': '1.75rem',
      '3xl': '2.75rem',
      '4xl': '4rem'
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700'
    }
  },
  corePlugins: {}
}
