<template>
  <section class="max-w-1440 h-auto m-auto">
    <div class="m-auto w-1096px h-auto flex flex-col">
      <p class="mt-24 mb-20 font-Graphik font-normal text-h2 text-text-primary">{{title}}</p>
      <div class="m-auto w-987px flex flex-col items-center"
           v-for="client in clients" :key="client.id">
        <img class="m-auto mb-12 " :src="client.brand" :alt="client.title">
        <div class="m-auto mb-20 center w-552px h-100px">
          <p class=" font-Graphik font-normal text-h3 text-text-secondary">{{client.message}}</p>
        </div>
        <div class="flex justify-between">
            <img class="m-auto mb-12 " :src="client.avatar" :alt="client.title">
            <div class="flex flex-col items-start">
              <p class="m-0 p-0 font-Graphik font-normal text-h5 text-text-secondary">{{client.text1}}</p>
              <p class="m-0 p-0 font-Graphik font-normal text-link text-text-primary">{{client.text2}}</p>
            </div>
        </div>

      </div>
    </div>
    <button class="mb-20 bg-blue-primary border-blue-primary rounded-full w-236px h-60px text-white ">Try for free</button>
  </section>
</template>

<script>
export default {
  name:'Testimonials',
  data(){
    return {
      title:'Testimonials',
      clients:[{id: 1,
                message:`Most calendars are designed for teams. 
                   Slate is designed for freelancers`,
                brand:`images/google.png`,
                avatar:`images/avatar.png`,
                text1:`Organize accross`,
                text2:`UI Designer`},
                 ],
      }
  },

}
</script>

<style>

</style>