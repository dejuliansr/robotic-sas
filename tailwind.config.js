/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './contact-us/index.html'],
  theme: {
    extend: {
      backgroundImage: {
        'tech-sas': "url('https://raw.githubusercontent.com/dejuliansr/robotic-sas/main/images/krbai.jpg')",
        'badaya-sas': "url('https://raw.githubusercontent.com/dejuliansr/robotic-sas/main/images/krsti.jpg')",
        'rostu': "url('https://raw.githubusercontent.com/dejuliansr/robotic-sas/main/images/krsbi.jpg')",
        'fitoplankton': "url('https://raw.githubusercontent.com/dejuliansr/robotic-sas/main/images/fitoplankton.jpg')",
        'robotic': "url('https://raw.githubusercontent.com/dejuliansr/robotic-sas/main/images/cover.png')"
      },
      fontFamily: {
        roboto: ['Roboto', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}