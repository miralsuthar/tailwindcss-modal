/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './stories/*'],
  content: ['./src/**/*.{jsx,js,ts,tsx}', './stories/**/*.{jsx,js,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
