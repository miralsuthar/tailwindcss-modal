/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: {
    enabled: false,
    content: ['./src/**/*.{js,jsx,ts,tsx}', './stories/*'],
  },

  theme: {
    extend: {},
  },
  plugins: [],
};
