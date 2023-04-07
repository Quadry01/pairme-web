/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    theme: {},
    extend: {
      colors: {
        blue: {
          DEFAULT: "#0a3855",
          foundation: "#F7FCFF",
          deeper: "#072f3b",
          light: "#8fe4ff",
          lighter: "#c8f1ff",
          ring: '#0D486D'
        },
        gray: {
          active: "#B3C1CA"
        }
      },
      fontSize: {
          'xxs': '8.03px',
      },
      spacing: {
        'home-mg': '570px',
        'home-sch' : '981px',

      },
      ringWidth: {
        '6': '6px',
      },
      maxWidth: {
        'home-mg': '777px',
      },
      zIndex: {
        '100': '100',
      }
    },
  },
  plugins: [],
};
