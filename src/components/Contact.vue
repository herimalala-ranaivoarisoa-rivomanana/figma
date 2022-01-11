<template>
  <section class="max-w-1177 h-924px m-auto">
    <p class="m-auto mb-5 font-Graphik font-normal text-h2">{{title}}</p>
    <p class="m-auto w-552px h-100px font-Graphik font-normal text-h3 ">{{description}}</p>
    <div class="m-auto w-1228px flex flex-row items-center">
      <div class="m-0 w-535px h-357px border-gray-900 rounded-2xl flex flex-col items-start  ">
          <p class="m-auto mx-0 mb-2 w-335px h-130px font-Graphik font-bold text-h4 text-left text-text-primary">{{title}}</p>
          <input class="w-353px h-54px mb-2.5 mr-3 pl-5 rounded-2 bg-email-background border-email-border"  v-model="name"  placeholder="Your name"/>
          <input class="w-353px h-54px mb-2.5 mr-3 pl-5 rounded-2 bg-email-background border-email-border"  v-model="email"  placeholder="Your email"/>
          <input class="w-353px h-147px mb-2.5  mr-3 pl-5 rounded-2 bg-email-background border-email-border"  v-model="message"  placeholder="Your message"/>
          <button class="mt-14 bg-blue-primary border-blue-primary rounded-full w-236px h-60px text-white ">Try for free</button>
      </div>
       <img class="m-auto" :src="image" :alt="title">
    </div>
</section>
</template>

<script>
export default {
  name:'Contact',
  data(){
    return {
      title:`Contact us`,
      description:`Most calendars are designed for teams. 
                   Slate is designed for freelancers`,
      image:`images/map.png`
      }
  },

}
</script>

<style>

</style>