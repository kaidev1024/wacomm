/** @type {import('tailwindcss').Config} */
const forms = require('@tailwindcss/forms');

const tops = new Array(14).fill(0).map((v, i) => `top-${i + 1}`);

module.exports = {
  theme: {
    extend: {
      colors: {
        gray: {
          666: '#666666',
          888: '#888888',
        },
      },
    },
  },
  content: [
    'index.html',
    './src/**/*.{tsx,ts}',
  ],
  safelist: [
    ...tops,
  ],
  plugins: [
    forms,
  ],
};
