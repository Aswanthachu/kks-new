/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
    "'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'"
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: '#0055A4',
        black: '#222222',
        secondary: '#F8F8F8',
        darkGrey: '#5A5A5A',
        danger:'#DE4839',
        gold:'#FFD700'
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        main: ['Poppins', 'sans-serif']
      },
      fontWeight: {
        mainBold: 700,
        threehundred: 300,
        sizeHundred: 600,
        fiveHundred: 500
      },
      boxShadow:{
        'blue':' 0px -8px 200px #ECF3FA',
      }

    },
    backgroundImage: {
      'plansBanner': "url('./assets/Stock-Market.png')",
      'stockHandShake': "url('./assets/UsStockHandShake.png')",
      'UsStockDiversity': "url('./assets/UsStockDiversity.png')",
      'UsStockDollar': "url('./assets/UsStockDollar.png')",
      'UsStockHandShake': "url('./assets/UsStockHandShake.png')",
      'UsStockMoney': "url('./assets/UsStockMoney.png')",
      'UsStockHandShake2': "url('./assets/UsStockHandShake2.png')",

      // retirement page

      'RP1': "url('./assets/RP1.png')",
      'RP2': "url('./assets/RP2.png')",
      'RP3': "url('./assets/RP3.png')",
      'RP4': "url('./assets/RP4.png')",
      'RP5': "url('./assets/RP5.png')",
      'RP6': "url('./assets/RP6.png')",
      'RP7': "url('./assets/RP7.png')",
      'RP8': "url('./assets/RP8.png')",
      'RP9': "url('./assets/RP9.png')",
      'RP10': "url('./assets/RP10.png')",
      'RP11': "url('./assets/RP11.png')",

      'RPHero':"url('./assets/RetirmentPlanPageHero.png)"
    }
  },


}