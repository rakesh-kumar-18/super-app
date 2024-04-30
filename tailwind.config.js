import TailwindScrollBar from "tailwind-scrollbar";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "single-day": ['Single Day', 'cursive']
      }
    },
  },
  plugins: [
    TailwindScrollBar({ nocompatible: true })
  ]
}

