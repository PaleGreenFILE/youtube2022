module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
      screens: {
        '2xl': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }
  
        'xl': {'min': '1279px'},
        // => @media (max-width: 1279px) { ... }
  
        'lg': {'max': '1025px'},
        // => @media (max-width: 1023px) { ... }
  
        'md': {'max': '770px'},
        // => @media (max-width: 767px) { ... }
  
        'sm': {'max': '480px'},
        // => @media (max-width: 639px) { ... }
      },    
    extend: {}
  },
  plugins: [],
  
}