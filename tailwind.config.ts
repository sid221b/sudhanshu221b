import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-app)'],
        serif: ['var(--font-app-2)'],
      },
      dropShadow: {
        base: '2px 2px 8px black',
        'base-white': '2px 2px 8px white',
      },
      transitionProperty: {
        'card-transition': 'filter, transform',
      },
      backdropBlur: {
        base: '2px',
      },
      spacing: {
        22: '5.4rem',
      },
    },
  },
  plugins: [],
}
export default config
