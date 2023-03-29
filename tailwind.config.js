/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'f7':'#f7f7f7',
        'ee':'#eee',
        'ef':'#efff',
        'bleuC':'#2196f3',
        'redDel':'#f44336',
        'grisC':'#e1e1e1bf',
        'grisC1':'#989292',
        'greenC':'#44f665'
      },
      spacing:{
        '82%':'82%',
        '15%':'15%',
        '14%':'14%',
        '30%':'30%',
        '67%':'67%',
        '1.25':'5px',
        '3.75':'15px',
        '12.5':'50px', 
        '37.5':'150px',
        '102.5':'410px',
        '125':'500px',
        '150':'600px'
      }
    },
  },
  plugins: [],
}

