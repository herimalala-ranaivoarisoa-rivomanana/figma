<template>
  <section class="w-full h-924px m-auto">
    <div class="m-auto max-w-herolight h-472px flex flex-row items-center flex-wrap shrink-0">
      <div class="w-418px h-355px m-auto flex flex-col ">
          <p class="m-auto mx-0 mb-2 font-Graphik font-normal text-h2 text-left text-text-primary">{{title}}</p>
          <p class="m-auto mx-0 my-0 font-Graphik font-normal text-h3 text-left text-text-secondary">{{description}}</p>
          <button class="mt-14 bg-blue-primary border-blue-primary 
                         rounded-full w-236px h-60px sm:m-auto text-white">
                         Try for free
          </button>
      </div>
      <div class="m-auto">
         <img class="object-contain m-auto w-661px h-380px mb-2.5" :src="image" :alt="title">
      </div>

    </div>
</section>
</template>

<script>
export default {
  name:'HeroLight',
  
  props: {
    isMobile: {
        type: Boolean
    },
  },
  data(){
    return {
      title:`Fastest way to organize`,
      description:`Most calendars are designed for teams. 
                   Slate is designed for freelancers`,
      image:`sources/videoscreen.svg`
      }
  },

}
</script>

<style>

</style>