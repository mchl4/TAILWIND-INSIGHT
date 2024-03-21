/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        InsightLogo:"url(../../dist/img/logo (1).png)",
        Banner:"url(../../dist/img/banner-img.png)",
        project1:"url(../../dist/img/projects1.png)",
        project2:"url(../../dist/img/projects2.png)",
        project3:"url(../../dist/img/projects3.png)",
        
      },
      colors:{
        dark:"#2b2b2b",
        light:"#ffffff",
        pula: "#e74737",
      }
      
    },
  },
  plugins: [],
}