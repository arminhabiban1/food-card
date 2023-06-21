/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme:{
    fontFamily:{'montserrat':['Montserrat','sans-serif']
    },
    extend: {
      colors:{
        'primary':'#fc5151',
        'secondary':'#7b7e7f',
        'bgc': '#f4fcfe'
      }
    },
  },
  plugins: [],
}