module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        dark: {
          300: "rgba(108,114,147,.2)",
          400: "#191c24",
          500: "#0f1015",
        },
        success: {
          400: "#00d25b",
          500: "#00D395",
        },
        danger: {
          400: "#fc424a",
        },
        blue: {
          400: "#c9e9f6 ",
        },
      },
      textColor: {
        success: "#00d25b",
        success2: "#00D395",
        muted: "#6c7293",
        danger: "#fc424a",
        indigo: "#8f5fe8",
      },
      borderColor: {
        success: {
          400: "#00d25b",
          500: "#00D395",
        },
      },
      fontFamily: {
        sans: ["Rubik", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          lg: "1140px",
          xl: "1140px",
          "2xl": "1320px",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
