const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */ 

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens:{
      'small' : '350px', 
      'small2' : '450px', 
      ...defaultTheme.screens,  
         },

    extend:{
      colors :{
         'green1' : '#7AB730',
         'green2': 'rgba(0,255 ,0,0.2)',
         'gray1' : '#f3f3f3'

       },
        keyframes: {
          reload: {
            '0% ' : { transform: 'rotate(0)' },
            '100%': { transform: 'rotate(360deg)' },
          },
          reload2: {
            
            '100%': {opacity:'0', visibility:'hidden' },
          }
        },
        plugins: [],
  
    
}
}
}