<template>
  <section class="w-full h-1362px m-auto flex flex-col items-center mb-20">
    <div class="m-auto mb-20 center w-214px h-75px">
      <p class="font-Graphik font-normal text-h2 text-text-primary">{{title}}</p>
    </div>
    <div class="m-auto mb-20 center w-552px h-100px">
      <p class=" font-Graphik font-normal text-h3 text-text-secondary">{{description}}</p>
    </div>
    <div v-if="isMobile" class="m-auto mb-20">
      <img src="sources/mobile/videoscreen.svg" alt="videoscreen">
    </div>
    <div class="m-auto flex flex-row flex-wrap  justify-center">
      <div class="mx-5 shrink-0 flex flex-col center"
           v-for="feature in features" :key="feature.id">
        <div class="w-255px m-auto">
            <img class="w-61px h-61px m-auto mb-5" :src="feature.icon" :alt="feature.title">
        </div>
        <div class="w-255px m-auto">
          <p class="mb-5 font-Graphik font-bold text-h4 justify-center text-text-primary">{{feature.title}}</p>
        </div>
        <div class="w-255px m-auto">
          <p class="mb-5font-Graphik font-normal text-p justify-center text-text-secondary">{{feature.description}}</p>
        </div>
      </div>
    </div>
    <div v-if="!isMobile" class="m-auto shrink-1">
      <img  class="m-auto mx-logo" src="images/videoscreen.png">
    </div>
</section>
</template>

<script>
export default {
  name:'Features',
      props: {
    isMobile: {
        type: Boolean
    },
  },
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