/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        // Semantic colors (work with OKLCH)
        primary: {
          DEFAULT: 'var(--color-primary)',
          hover: 'var(--color-primary-hover)',
          light: 'var(--color-primary-light)',
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)',
          hover: 'var(--color-secondary-hover)',
          light: 'var(--color-secondary-light)',
        },
        
        // Background colors
        background: 'var(--color-background)',
        surface: {
          DEFAULT: 'var(--color-surface)',
          hover: 'var(--color-surface-hover)',
        },
        
        // Text colors
        text: {
          heading: 'var(--color-text-heading)',
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          muted: 'var(--color-text-muted)',
          'on-primary': 'var(--color-text-on-primary)',
        },
        
        // Button colors
        button: {
          primary: 'var(--color-button-primary)',
          'primary-hover': 'var(--color-button-primary-hover)',
          secondary: 'var(--color-button-secondary)',
          'secondary-hover': 'var(--color-button-secondary-hover)',
          text: 'var(--color-button-text)',
        },
        
        // Border colors
        border: {
          DEFAULT: 'var(--color-border)',
          hover: 'var(--color-border-hover)',
          focus: 'var(--color-border-focus)',
        },
        
        // Utility colors
        accent: 'var(--color-accent)',
        success: 'var(--color-success)',
        warning: 'var(--color-warning)',
        error: 'var(--color-error)',
        info: 'var(--color-info)',
        
        // Direct OKLCH color access
        white: 'var(--color-white)',
        black: 'var(--color-black)',
        
        // Full OKLCH palette access
        gray: {
          50: 'var(--color-gray-50)',
          100: 'var(--color-gray-100)',
          200: 'var(--color-gray-200)',
          500: 'var(--color-gray-500)',
          600: 'var(--color-gray-600)',
          700: 'var(--color-gray-700)',
          800: 'var(--color-gray-800)',
          900: 'var(--color-gray-900)',
        },
        blue: {
          50: 'var(--color-blue-50)',
          100: 'var(--color-blue-100)',
          200: 'var(--color-blue-200)',
          400: 'var(--color-blue-400)',
          500: 'var(--color-blue-500)',
          600: 'var(--color-blue-600)',
          700: 'var(--color-blue-700)',
        },
        green: {
          50: 'var(--color-green-50)',
          100: 'var(--color-green-100)',
          200: 'var(--color-green-200)',
          400: 'var(--color-green-400)',
          500: 'var(--color-green-500)',
          600: 'var(--color-green-600)',
          700: 'var(--color-green-700)',
        },
        red: {
          400: 'var(--color-red-400)',
          500: 'var(--color-red-500)',
        },
        amber: {
          400: 'var(--color-amber-400)',
        },
        cyan: {
          400: 'var(--color-cyan-400)',
        },
        emerald: {
          500: 'var(--color-emerald-500)',
        },
        orange: {
          500: 'var(--color-orange-500)',
        },
        indigo: {
          100: 'var(--color-indigo-100)',
          600: 'var(--color-indigo-600)',
          700: 'var(--color-indigo-700)',
        },
      },
      fontFamily: {
        primary: ['var(--font-primary)'],
        secondary: ['var(--font-secondary)'],
        accent: ['var(--font-accent)'],
      },
    },
  },
  plugins: [],
}
