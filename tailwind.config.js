module.exports = {
  content: [
    "./src/styles/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/hooks/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: {
          // Blue
          pensionera: {
            lighter: "#4C7BAD",
            DEFAULT: "#123b75",
            darker: "#001A3F",
          },
        },
        secondary: {
          // Grey
          pensionera: {
            lighter: "#FCFCFC",
            DEFAULT: "#F5F5F5",
            darker: "#B5B5B5",
          },
        },
        "accent-primary": {
          // Orange
          pensionera: {
            lighter: "#FAC073",
            DEFAULT: "#eb9953",
            darker: "#CF7241",
          },
        },
        "accent-secondary": {
          // Red
          pensionera: {
            lighter: "#FF7D73",
            DEFAULT: "#e65f5c",
            darker: "#C3494D",
          },
        },
        success: {
          pensionera: {
            lighter: "#65C179",
            DEFAULT: "#008C0E",
            darker: "#005C2B",
          },
        },
        black: {
          pensionera: {
            lighter: "#3E4056",
            DEFAULT: "#030301",
            darker: "#000000",
          },
        },
      },
    },
  },
   /*  theme: {
      extend: {},
    }, */
    plugins: [],
  }