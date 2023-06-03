/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    theme: {
      fontWeight: {
        medium: '500'
      }
    },
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
          active: "#B3C1CA",
          B4B4B: "#4B4B4B"
        }
      },
      fontSize: {
          'xxs': '8.03px',
      },
      spacing: {
        'home-mg': '590px',
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
        '120': '120',
        '130': '130',
      }
    },
  },
  plugins: [],
};
