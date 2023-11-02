/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js}",
  ],
  screen: {
    sm: '480px',
    md: '768px',
    lg: '1024px',
    xl: '1440px',
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans', 'sans-serif'],
      },
      colors: {
        'bgColor' : '#0D0D0D',
        'primaryColor' : '#F2F2F2',
        'secondaryColor' : '#7C27F2',
      },
    },
  },
  plugins: [],
}

