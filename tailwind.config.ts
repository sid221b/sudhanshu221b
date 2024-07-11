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
        base: '2px 4px 6px black',
        'base-white': '2px 4px 6px white',
      },
      transitionProperty: {
        'card-transition': 'filter, transform',
      },
    },
  },
  plugins: [],
}
export default config
