import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,tsx}'],
  plugins: [typography],
  theme: {
    extend: {
      colors: {
        lightGreen: '#16DD00',
      },
      fontFamily: {
        alientz: ['var(--font-alientz)'],
        alientzSerif: ['var(--font-alientz-serif)'],
      },
    },
  },
}
