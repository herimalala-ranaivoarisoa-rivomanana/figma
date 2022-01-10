<template>
  <header class="max-w-fullscreen h-1042px m-auto">
      <img class="m-auto object-left absolute top-0 -z-index-0" srcset="images/background.png" alt="">
        <nav class="top-10 m-auto mb-44 relative  center flex justify-center items-center">
          <div class="mr-nav  flex items-center justify-center">
            <a class="font-Graphik font-normal  text-link text-white mx-menu" v-for="menu in menus" :key="menu"> {{menu.value}}</a>
            <img class="mx-logo" src="images/contentlogodark.png">
          </div>
          <div class="ml-nav flex items-center">
            <a class="mx-social" v-for="icon in social" :key="icon.id"> <img :src="icon.link" :alt="icon.name"></a>
          </div>
        </nav>
        <div class="m-auto mb-2 center relative max-w-title max-h-[168px] text-white">
          <p class="font-Graphik font-bold text-h1 ">{{pageTitle}}</p>
        </div>
        <div class="m-auto mb-20 center relative max-w-desc max-h-[80px] text-white">
          <p class=" font-Graphik font-normal text-h3">{{pageDescription}}</p>
        </div>
         <button class="relative bg-blue-primary border-blue-primary rounded-full w-256px h-52px text-white ">Try for free</button>
  </header>
</template>

<script>
export default {
  name:'TheHeader',
  data(){
    return {
      menus:[{value:"Home"}, {value:"Product"}, {value:"Pricing"}, {value:"About"}, {value:"Contact"}],
      social:[{id: 1,name:"tweeter",link:"images/tweeter.png"},{id: 2,name:"facebook",link:"images/fb.png"},
              {id: 3,name:"linkedin",link:"images/linkedin.png"},],
      pageTitle:'The best products start with Figma',
      pageDescription:`Most calendars are designed for teams. Slate is designed 
                 for freelancers`
      }
  },

}
</script>

<style>


</style>