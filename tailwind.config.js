module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "argent":"#D0D0D0",
        "or":"#FFD700",
        "blanc2":"#E9383F",
        "ultra-lune": "#3D32D8",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
