
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],

  theme: {
    extend: {
      fontFamily: {
        inter: ["'Inter'", "system-ui"],
      },
      colors: {
        "softOrange": "hsl(35, 77%, 62%)",
        "SoftRed": "hsl(5, 85%, 63%)",
        "OffWhite": "hsl(36, 100%, 99%)",
        "GrayishBlue": "hsl(233, 8%, 79%)",
        "DarkGrayishBlue": "hsl(236, 13%, 42%)",
        "VeryDarkBlue": "hsl(240, 100%, 5%)",
      },
      backgroundImage:{
        'menu-open':"url('./images/icon-menu.svg')",
        'menu-close': "url('./images/icon-menu-close.svg')",
        'hero-desktop': "url('./images/image-web-3-desktop.jpg')",
        'hero-mobile': "url('./images/image-web-3-mobile.jpg')"
      }

    },
  },
  plugins: [],
}