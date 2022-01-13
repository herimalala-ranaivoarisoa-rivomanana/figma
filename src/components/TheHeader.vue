<template>
  <header class="w-full h-1042px  m-auto">
      <img class="w-full m-0 absolute top-0 -z-10
                2xl:h-930pxpx
                xl:h-670px
                lg:h-536px
                md:h-863px 
                ms:h-863px
                ems:h-863px" 
                srcset="images/background.png" alt="banner">
      <nav class="w-full m-auto  relative  flex 
                esm:justify-between esm:my-3
                sm:justify-between sm:my-3
                md:justify-between md:my-3
                2xl:center 2xl:justify-center 2xl:items-center
                xl:center xl:justify-center xl:items-center
                lg:center lg:justify-center lg:items-center
                justify-center items-center
                2xl:w-1776px 2xl:top-10 2xl:mb-36 
                xl:w-1280px xl:top-7 xl:mb-24
                lg:w-1024px lg:top-5 lg:mb-16
                md:top-4 md:mb-16 
                sm:top-3.5 sm:mb-14
                esm:top-2.5 esm:mb-10">
        <div class="mr-nav flex items-center justify-center">
          <a class="font-Graphik font-normal  text-link text-white 
                    mx-menu" 
                    v-show="!isMobile"
                    v-for="menu in menus" :key="menu"> 
                    {{menu.value}}
          </a>
          <img class="mx-logo" :src="icons.logo.link" :alt="icons.logo.name">
        </div>
        <div class="2xl:ml-nav xl:ml-nav lg:ml-nav flex items-center">
          <a class="mx-social" v-show="!isMobile" v-for="social in icons.socialMedia" :key="social.id">
              <img class="w-33.32px h-33.32px" :src="social.link" :alt="social.name">
          </a>
        </div>
          <img class="w-33.32px mr-6 h-33.32px " v-show="isMobile" :src="mobileMenu.link" :alt="mobileMenu.name">
      </nav>
      <p class="m-auto center relative text-white
                2xl:w-672px 2xl:h-168px 2xl:mb-8 
                xl:w-672px xl:h-168px xl:mb-2
                lg:w-672px lg:h-168px lg:mb-1 
                md:w-353px md:h-185px md:mb-4
                sm:w-353px sm:h-185px sm:mb-4
                esm:w-353px esm:h-185px esm:mb-4
                md:text-h2 sm:text-h2 esm:text-h2 
                font-Graphik font-bold text-h1  ">
            {{pageTitle}}
      </p>
      <p class="m-auto center relative text-white 
                2xl:w-786px 2xl:h-100px 2xl:mb-16
                xl:w-566px xl:h-72px xl:mb-4
                lg:w-453px lg:h-56px lg:mb-4 
                md:w-285px md:h-100px md:mb-8
                sm:w-285px sm:h-100px sm:mb-8
                esm:w-285px esm:h-100px esm:mb-8
               font-Graphik font-normal text-h3">
            {{pageDescription}}
      </p>
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
  },
  data(){
    return {
      menus:[{value:"Home"}, {value:"Product"}, {value:"Pricing"}, {value:"About"}, {value:"Contact"}],
      pageTitle:'The best products start with Figma',
      pageDescription:`Most calendars are designed for teams. Slate is designed 
                 for freelancers`,
      logo:{id:1,name:'logo',link:"sources/dark.svg"},
      mobileMenu:{id:1,name:'mobile',link:"sources/mobile/menu.svg"}
      }
  },
}
</script>

<style>


</style>