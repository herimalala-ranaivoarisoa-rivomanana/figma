<template>
  <header>
    <div class="w-full m-auto center h-863px absolute -z-10" >
      <img class="m-auto bsolute -z-10 h-863px object-cover" 
              srcset="images/background.png" alt="banner">
    </div>
    <nav class="w-full  relative pt-8 z-10 flex items-center justify-center
                mb-36">
      <div  v-if="!isMobile" class="m-0">     
        <a class="font-Graphik font-normal  text-link text-white 
            mx-menu" v-for="menu in menus" :key="menu">{{menu.value}}</a>
      </div>
      <div>
          <img :src="icons.logo.link" :alt="icons.logo.name">
      </div>
      <div v-if="!isMobile" class="m-0 ml-logo-social flex flex-row items-center ">
          <a class="mx-social"  v-for="social in icons.socialMedia" :key="social.id">
            <img class="w-33.32px h-33.32px" :src="social.link" :alt="social.name">
          </a>
      </div>
      <div v-if="isMobile">
        <img class="w-33.32px h-33.32px mr-2.5" :src="mobileMenu.link" :alt="mobileMenu.name">
      </div>
    </nav>
    <div class="2xl:w-1280px xl:w-1280px lg:w-640px 
                md:w-640px sm:w-3200px
                m-auto center relative">
      <p class="m-auto p-0 font-Graphik
                font-bold text-h1 text-white
                2xl:mx-60 xl:mx-60 lg:mx-0 
                md:mx-0 sm:mx-8
                2xl:my-8 xl:my-6 lg:my-5
                md:my-3 sm:my-3 mb-80
                lg:text-h2 lg:font-bold">
                {{pageTitle}}
                </p>
      <p class="m-auto p-0  my-0 font-Graphik
                font-normal text-h2 text-white
                2xl:mx-0 xl:mx-0 lg:mx-0
                md:mx-0 sm:mx-8
                2xl:my-8 xl:my-8 lg:my-8
                md:my-3 sm:my-3
                lg:text-h3
                  mb-36">
                {{isMobile?pageDescription.mobile:pageDescription.desktop}}   
                </p>
    </div>
    <button class="relative bg-blue-primary border-blue-primary rounded-full w-256px h-52px text-white ">Try for free</button>

  </header>
</template>

<script>


export default {
  name:'TheHeader',
  components:{
  },
    props: {
      icons: {
        type: Object
    },
    isMobile: {
        type: Boolean
    },
    size: {
        type: String
    },
  },
  data(){
    return {
      menus:[{value:"Home"}, {value:"Product"}, {value:"Pricing"}, {value:"About"}, {value:"Contact"}],
      pageTitle:'The best products start with Figma',
      pageDescription:{desktop:`Most calendars are designed for teams.Slate is designed 
                 for freelancers`,mobile:`Most calendars are designed for teams.`},
      logo:{id:1,name:'logo',link:"sources/dark.svg"},
      mobileMenu:{id:1,name:'mobile',link:"sources/mobile/menu.svg"}
      }
  },
}
</script>

<style>


</style>