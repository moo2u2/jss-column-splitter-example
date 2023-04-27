/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        /* Add your own here */
      },
    },
    safelist: ['bg-white', 'bg-black', 'bg-zinc-400', 'bg-sky-200'],
    plugins: [],
  };
  