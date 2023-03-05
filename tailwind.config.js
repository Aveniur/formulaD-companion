/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gear1: '#FFDA2A',
        gear2: '#EE6F27',
        gear3: '#D70B04',
        gear4: '#018C49',
        gear5: '#8F4A81',
        gear6: '#364E95',
      },
    },
  },
  plugins: [],
};
