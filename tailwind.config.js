/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      cyan: {
        100: 'hsl(189, 41%, 97%)',
        200: 'hsl(185, 41%, 84%)',
        300: 'hsl(184, 14%, 56%)',
        400: 'hsl(186, 14%, 43%)',
        500: 'hsl(183, 100%, 15%)',
        600: 'hsl(172, 67%, 45%)',
      },
      white: 'hsl(0, 0%, 100%)',
    },
    fontFamily: { mono: ['Space Mono', 'monospace'] },
    extend: {},
  },
  plugins: [],
};
