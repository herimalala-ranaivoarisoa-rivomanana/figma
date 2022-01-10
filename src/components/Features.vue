<template>
  <section class="m-auto">
    <div class="m-auto mb-2 center relative max-w-title max-h-[168px] text-white bg-center">
      <p class="font-Graphik font-bold text-h1 ">{{pageTitle}}</p>
    </div>
    <div class="m-auto mb-20 center relative max-w-desc max-h-[80px] text-white bg-center">
      <p class=" font-Graphik font-normal text-h3">{{pageDescription}}</p>
    </div>
    <button class="relative bg-blue-primary border-blue-primary rounded-full w-256px h-52px text-white ">Try for free</button>
</section>
</template>

<script>
export default {
  name:'Features',
  data(){
    return {
      test:"test",
      menus:[{value:"Home"}, {value:"Product"}, {value:"Pricing"}, {value:"About"}, {value:"Contact"}],
      social:[{name:"tweeter",link:"images/tweeter.png"},{name:"facebook",link:"images/fb.png"},{name:"linkedin",link:"images/linkedin.png"},],
      pageTitle:'The best products start with Figma',
      pageDescription:`Most calendars are designed for teams. Slate is designed 
                 for freelancers`
      }
  },

}
</script>

<style>

</style>