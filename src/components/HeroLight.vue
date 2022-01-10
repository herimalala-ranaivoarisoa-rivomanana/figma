<template>
  <section class="max-w-fullscreen h-924px m-auto">
    <div class="m-auto max-w-herolight h-472px flex flex-row justify-between">
      <div class="m-0 w-535px h-357px flex flex-col items-start  ">
          <p class="m-auto mx-0 mb-2 w-335px h-130px font-Graphik font-normal text-h2 text-left text-text-primary">{{title}}</p>
          <p class="m-auto mx-0 my-0  w-532px h-100px  font-Graphik font-normal text-h3 text-left text-text-secondary">{{description}}</p>
          <button class="mt-14 bg-blue-primary border-blue-primary rounded-full w-236px h-60px text-white ">Try for free</button>
      </div>
       <img class="m-auto w-661px h-380px mb-2.5" :src="image" :alt="title">
    </div>
</section>
</template>

<script>
export default {
  name:'HeroLight',
  data(){
    return {
      title:`Fastest way to organize`,
      description:`Most calendars are designed for teams. 
                   Slate is designed for freelancers`,
      image:`images/screencontent.png`
      }
  },

}
</script>

<style>

</style>