<template>
  <section class="m-auto mb-20 flex flex-col items-center">
    <div class="m-auto mb-2 center w-214px h-75px">
      <p class="font-Graphik font-normal text-h2 text-text-primary">{{title}}</p>
    </div>
    <div class="m-auto mb-20 center max-w-552 h-100px">
      <p class=" font-Graphik font-normal text-h3 text-text-secondary">{{description}}</p>
    </div>
      <div class="m-auto mb-5 center max-w-1096 flex flex-wrap justify-center items-center">
        <div class="w-273px border-gray-900 shadow-md flex flex-col items-center shrink-0"
           v-for="partner in partners" :key="partner.id">
          <p class="m-0 mt-2.5 font-Graphik font-normal text-h5 justify-center text-text-secondary">{{partner.name}}</p>
        <div class="w-244px h-78px m-0 ">
          <img class="m-auto  " :src="partner.logo" :alt="partner.title">
        </div>
      </div>
    </div>
    <button class="relative bg-blue-primary border-blue-primary rounded-full w-236px h-60px text-white ">Try for free</button>
</section>
</template>

<script>
export default {
  name:'Partners',
  data(){
    return {
      title:'Partners',
      description:`Most calendars are designed for teams. 
                   Slate is designed for freelancers`,
      partners:[{id: 1,name:`Google`,
                 logo:`sources/partners/google.svg`},
                {id: 2, name:`Amazon`,
                 logo:`sources/partners/amazon.svg`},
                {id: 3, name:`Microsoft`,
                logo:`sources/partners/microsoft.svg`},
                 {id: 4, name:`Uber`,
                logo:`sources/partners/uber.svg`},
                {id: 5,name:`Dropbox`,
                logo:`sources/partners/dropbox.svg`},
                {id: 6, name:`Google`,
                logo:`sources/partners/google.svg`},
                {id: 7, name:`Uber`,
                   logo:`sources/partners/uber.svg`},
                 {id: 8, name:`Amazon`,
                 logo:`images/amazon.png`},
                 ],
      videoUrl:``,
      }
  },

}
</script>

<style>

</style>