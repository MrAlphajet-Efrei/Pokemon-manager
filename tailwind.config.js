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
        "color-type":{
          "normal":"#ADA594",
          "fighting":"#a55239",
          "flying": "#9cadf7",
          "poison":  "#b55aa5",
          "ground":"#d6b55a",
          "rock": "#bda55a",
          "bug": "#adbd21",
          "ghost": "#6363b5",
          "steel": "#adadc6",
          "grass": "#7bce52",
          "fire": "#f75231",
          "water": "#399cff",
          "electric": "#ffc631",
          "psychic": "#ff73a5",
          "ice": "#5acee7",
          "dragon": "#8858f6",
          "dark": "#735a4a",
          "fairy": "#e09ae3"
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
