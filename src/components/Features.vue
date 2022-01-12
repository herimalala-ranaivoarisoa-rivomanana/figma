<template>
  <section class="w-full h-1362px m-auto">
    <div class="m-auto mb-2 center w-214px h-75px">
      <p class="font-Graphik font-normal text-h2 text-text-primary">{{title}}</p>
    </div>
    <div class="m-auto mb-20 center w-552px h-100px">
      <p class=" font-Graphik font-normal text-h3 text-text-secondary">{{description}}</p>
    </div>
    <div class="m-auto center flex 
    2xl:h-257px xl:h-257px lg:h-257px 
    2xl:max-w-features  xl:max-w-features  lg:max-w-features
    2xl:flex-row  2xl:flex-wrap 2xl:justify-between
    xl:flex-row  xl:flex-wrap xl:justify-between
    lg:flex-row  lg:flex-wrap lg:justify-between
    md:flex-col sm:flex-col esm:flex-col
    md:center sm:center esm:center">
      <div class="m-0 w-255px h-257px flex flex-col items-center"
           v-for="feature in features" :key="feature.id">
        <img class="w-61px h-61px mb-2.5" :src="feature.icon" :alt="feature.title">
        <p class="mb-2.5 font-Graphik font-bold text-h4 justify-center text-text-primary">{{feature.title}}</p>
        <p class=" font-Graphik font-normal text-p justify-center text-text-secondary">{{feature.description}}</p>
      </div>
    </div>
    <div class="w-full md:invisible sm:invisible esm:invisible">
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