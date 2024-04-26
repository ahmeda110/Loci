/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
  theme: {
    extend: {
      colors:{
        'custom-salmon': '#F0C6BF' ,
        'button-salmon': '#F9AA9D' ,
        'custom-purple': '#E1CFEB' ,
        'button-purple': '#CDB4DB' ,
        'custom-green': '#D1EBBF' ,
        'button-green': '#A8D08D' ,


      }
    },
  },
  plugins: [],
}

