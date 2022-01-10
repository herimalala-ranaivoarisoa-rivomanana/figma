<template>
  <section class="max-w-fullscreen h-1362px m-auto">
    <div class="m-auto mb-2 center w-214px h-75px">
      <p class="font-Graphik font-normal text-h2 text-text-primary">{{title}}</p>
    </div>
    <div class="m-auto mb-20 center w-552px h-100px">
      <p class=" font-Graphik font-normal text-h3 text-text-secondary">{{description}}</p>
    </div>
    <div class="m-auto max-w-features h-257px flex flex-row  flex-wrap justify-between">
      <div class="m-0 w-255px h-257px flex flex-col items-center"
           v-for="feature in features" :key="feature.id">
        <img class="w-61px h-61px mb-2.5" :src="feature.icon" :alt="feature.title">
        <p class="mb-2.5 font-Graphik font-bold text-h4 justify-center text-text-primary">{{feature.title}}</p>
        <p class=" font-Graphik font-normal text-p justify-center text-text-secondary">{{feature.description}}</p>
      </div>
    </div>
    <div class="max-w-full-fullscreen ">
      <img class="m-auto hover:mx-logo" src="images/videoscreen.png">
    </div>
     
</section>
</template>

<script>
export default {
  name:'Features',
  data(){
    return {
      title:'Features',
      description:`Most calendars are designed for teams. 
                   Slate is designed for freelancers`,
      features:[{id: 1,icon:`images/mdi_drawing.png`, title:`OpenType features Variable fonts`,
                 description:`Slate helps you see how many more days you need to work 
                 to reach your financial goal.`},
                 {id: 2,icon:`images/mdi_draw.png`, title:`Design with real data`,
                 description:`Slate helps you see how many more days you need to work 
                 to reach your financial goal.`},
                 {id: 3,icon:`images/mdi_brush.png`, title:`Design with real data`,
                 description:`Slate helps you see how many more days you need to work 
                 to reach your financial goal.`},
                 ],
      videoUrl:``,
      }
  },

}
</script>

<style>

</style>