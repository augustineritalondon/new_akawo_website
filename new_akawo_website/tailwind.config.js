/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F4A85D",
        secondary: "#373435",
        neutral: "#111827",
        failed: "#F81B3A",
        success: '#03D17A',
        white: '#FFFFFF',
        background: '#FCFCFC',
        banner: '#F9F6F3',
        banner2: '#E8ECED',
        skew_bg: 'rgba(244, 168, 93, 0.1)',
        skew_bg2: 'rgba(244, 168, 93, 0.8)',
        skew_bg3: 'rgba(244, 168, 93, 0.4)',
        skew_bg4: '#EDE9FE',
        block_bg: 'rgba(3, 209, 122, 0.1);',
        overlay: 'rgba(0, 0, 0, 0.5);',
      },
      boxShadow: {
        'ak-shadow': '0px 2px 7px rgba(0, 0, 0, 0.07)',
        'card-shadow': '0px 7px 62px rgba(118, 118, 118, 0.03);',
        'modal-shadow': '0px 10px 20px rgba(0, 0, 0, 0.1);',
      },
      width: {
        '700': '700px',
        '420': '420px',
        '253': '253.29px',
        '251': '251px',
        '612': '612px',
        '45': '44%',
        '30': '30%',
        '70': '70%',
        '90': '85%',
      },
      height: {
        '694': '650px',
        89: '89.7px',
        90: '90vh',
        '331': '331.4px',
      },
      skew: {
        '8': '8deg',
      },
      spacing: {
        85: '85px',
        87: '87px',
        90: '90px',
        9: '18px',
        50: '50px',
        400: '420px',
        490: '490px',
        630: '630px',
        300: '310px',
        350: '350px',
        360: '360px',
        200: '210px',
        290: '290px',
        140: '140px',
        120: '120px',
        100: '100px',
        600: '810px',
        700: '760px',
      },
      fontFamily:{
        'Montserrat': ['Montserrat'],
      },
      fontSize: {
        '50': '50px',
        '10': '10px',
        '22': '22px',
      },
      screens: {
        'lgx': {'min': '1100px', 'max': '1280px'},
        'xxl': {'min': '1300px', 'max': '1400px'},
      },
      zIndex: {
        '1000': "1000",
      }
    },
  },
  plugins: [],
}
