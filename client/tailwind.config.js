/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // This connects your Tailwind classes to your CSS variables
        base: 'var(--color-base)',
        surface: 'var(--color-surface)',
        muted: 'var(--color-text-muted)',
        border: 'var(--color-border)',
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        accent: 'var(--color-accent)',
        'accent-glow': 'var(--color-glow)',
        'surface-hover': 'var(--color-surface-hover)',
        'border-highlight': 'var(--color-border-highlight)',
      },
      fontFamily: {
        body: ['var(--font-body)', 'sans-serif'],
        heading: ['var(--font-heading)', 'serif'],
      },
    },
  },
  plugins: [],
}