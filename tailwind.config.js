module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      textColor: {
        base: 'var(--color-text-base)',
        inverted: 'var(--color-text-inverted)',
        accent: 'var(--color-text-accent)',
        title: 'var(--color-title)',
        subTitle: 'var(--color-sub-title)',
        heading_1: 'var(--color-text-heading-1)',
        heading_2: 'var(--color-text-heading-2)',
        heading_3: 'var(--color-text-heading-3)',
        heading_4: 'var(--color-text-heading-4)',
      },
      backgroundColor: {
        base: 'var(--color-background)',
        accent: 'var(--color-background-accent)',
      },
      borderColor: {
        base: 'var(--color-border)',
        active: 'var(--color-border-active)',
      },
      ringColor: {
        active: 'var(--color-border-active)',
      },
      duration: {
        2000: '2000ms',
        3000: '3000ms',
      },
      colors: {
        base: 'var(--color-stroke)',
      },
    },
  },
  variants: {},
  plugins: [],
}
