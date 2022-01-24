module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          base: "hsl(203, 89% , 53%)",
          dark: "hsl(203, 89%, 43%)",
          light: "hsl(203, 89%, 93%)"
        },
        gray: {
          dark: "#657786",
          light: "#AABBC2",
          extraLight: "#E1E8ED",
          lightest:"#F5F8FA"
        },
        black: "#14171A"
           }
     }
   
  },
  plugins: [],
}