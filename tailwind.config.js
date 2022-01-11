module.exports = {
  purge:["./src/**/*.vue"],
  content: [],
  theme: {

    extend: {
      margin:{
        'menu':'20px',
        'logo':'19px',
        'social':'11px',
        'nav':'137px',
      },
      maxWidth:{
        '1440':'1440px',
        '1046':'1046px',
        'fullscreen':'1776px',
        'herolight':'1243.3px',
        'title':'672px',
        'desc':'766px',
        'features':'869px',
      },
      fontSize:{
        'p':['18px',{
          lineHeight:'25px',
          letterSpacing:'02px'
        }],
        'h1':['74px', {
          lineHeight: '84px',
          letterSpacing: '0.2px'}],
        'h2':['48px', {
          lineHeight: '55px',
          letterSpacing: '0.2px'}],
        'h3':['28px', {
          lineHeight: '40px',
          letterSpacing: '0.2px'}],
        'h4':['20px', {
          lineHeight: '20px',
          letterSpacing: '0.2px'}],
        'h5':['16px', {
          lineHeight: '23px',
          letterSpacing: '0.1px'}],
          
        'link':['15px', {
          lineHeight: '28px',
          letterSpacing: '0.2px'}],
        'mobile-menu':['30px', {
          lineHeight: '45px',
          letterSpacing: '0.2px'}],
        },
      fontFamily: {
        'Graphik': ['Graphik'],
      },
      colors: {
        border:{
          gray:'#D8D8D8',
        },
        blue: {
          primary: '#2091F9',
        },
        green: {
          secondary: '#2DC071',
        },
        orange:{
          secondary:'#F15B07',
        },
        text:{
          primary:'#252B42',
          secondary:'#374754',
          light:'#FFFFFF',

        },
        email:{
          background:'#F4F4F4',
          border:'E8E8E8',
        },
        background:{
          dark:'#252B42',
          light:'#FFFFFF',
          gradient:'#222B3',
          fill:'#222B32'
        },
      }
    },
      
  },
  plugins: [
    require('tailwindcss-pixel-dimensions')({
      width:{
        total:1900,
      },
      height:{
        total:1900,
      },
      fontSize:{
        total:99
      }
    })
  ],
}
