module.exports = {
  theme: {
    
    fill: theme => ({
      'red': theme('colors.red.500'),
      'green': theme('colors.green.500'),
      'blue': theme('colors.blue.500'),
    }),
    extend: {
      
      backgroundColor: {
        'primary': "#2170ef",
        'customBlack': '#060606',
      },
      fontSize: {
        'huge': "130px",
        '40': "40px",
        '50': "50px",
      },
      width: {
        // 'logomobile': 60,
        // 'logosmd': 84,
      },
      height: {
        'logomobile': 50,
        'logosmd': 84,
      },
      padding: {
      },
      margin: {
      },
      listStyleType: {
        square: "square",
      },
      fontFamily: {
      },
      screens: {
      },
      opacity: {
      }
    },
  },
  variants: {
    extend: {
    //  fill: ['responsive','hover', 'focus'],
    }
  },
  plugins: [],
}
