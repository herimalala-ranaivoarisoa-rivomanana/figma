<template>
  <section class="max-w-1440 h-auto m-auto">
    <div class="m-auto mb-2 center w-214px h-75px">
      <p class="font-Graphik font-normal text-h2 text-text-primary">{{title}}</p>
    </div>
    <div class="m-auto mb-20 center w-552px h-100px">
      <p class=" font-Graphik font-normal text-h3 text-text-secondary">{{description}}</p>
    </div>
    <div class="m-auto mb-5 w-1096px h-auto flex flex-row  flex-wrap justify-between">
      <div class="m-0 w-273px flex flex-col items-center"
           v-for="partner in partners" :key="partner.id">
        <p class="m-0  font-Graphik font-normal text-h5 justify-center text-text-secondary">{{partner.name}}</p>
        <img class="m-0" :src="partner.logo" :alt="partner.title">
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
                 logo:`images/google.png`},
                {id: 2, name:`Amazone`,
                 logo:`images/amazone.png`},
                {id: 3, name:`Microsoft`,
                 logo:`images/microsoft.png`},
                 {id: 4, name:`Uber`,
                 logo:`images/uber.png`},
                {id: 5,name:`Dropbox`,
                 logo:`images/dropbox.png`},
                {id: 6, name:`Google`,
                 logo:`images/google.png`},
                {id: 7, name:`Uber`,
                 logo:`images/uber.png`},
                 {id: 8, name:`Amazone`,
                 logo:`images/amazone.png`},
                 ],
      videoUrl:``,
      }
  },

}
</script>

<style>

</style>