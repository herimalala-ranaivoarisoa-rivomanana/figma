<template>
  <section class="m-auto mb-20">
    <p class="m-2.5 mb-5 font-Graphik font-normal text-h2">{{title}}</p>
    <p class="m-2.5 mb-20 font-Graphik font-normal text-h3 ">{{description}}</p>
    <div :class="isMobile?`mb-24 m-auto flex flex-col items-center`:`mb-24 m-auto flex flex-row justify-center`">
      <div class="h-669px mb-20 p-8 shrink-0 border-gray-900 shadow-md rounded-2xl flex flex-col items-center  ">
          <p class="mx-0 my-8 p-0 w-335px h-130px justify-center font-Graphik font-bold text-h4 text-left text-text-primary">{{title}}</p>
          <input class="w-353px min-h-54 p-2.5 my-2.5 rounded-2 bg-email-background border-email-border"  v-model="name"  placeholder="Your name"/>
          <input class="w-353px min-h-54 p-2.5 my-2.5 rounded-2 bg-email-background border-email-border"  v-model="email"  placeholder="Your email"/>
          <input class="w-353px min-h-193 p-2.5 my-2.5 rounded-2 bg-email-background border-email-border"  v-model="message"  placeholder="Your message"/>
          <button class="mt-14 mb-20 bg-blue-primary border-blue-primary rounded-full w-236px min-h-60 text-white ">Send</button>
      </div>
      <div class="flex flex-col items-start">
        <div class="flex flex-col items-center">
          <div :class="sWidth<780?`text-red-900 flex flex-col items-center`:`text-black flex flex-row justify-between m-auto`">
            <div v-for="(media, index) in datas.mediaCom" :key="index" 
                class="flex flex-col items-center">
              <div class="text-blue-primary"><img :src='media.link' alt=""></div>
              <p class="w-313px h-66px font-Graphik font-normal text-h5">{{media.detail}}</p>
            </div>
          </div>
          <img class="shrink-1 max-w-515px h-343-px m-auto" :src="image" :alt="title">
          <div class="shrink-0 flex flex-row justify-start">
            <div v-for="(media, index) in datas.socialMedia" :key="index">
              <img class="w-33.32px h-33.32px m-2.5 bg-blue-primary" :src='media.link' alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name:'Contact',
    props: {
      datas: {
        type: Object
    },
    isMobile: {
        type: Boolean
    },
    sWidth: {
        type: Number
    },
  },
  data(){
    return {
      likd:'../components/UI/socialMedia/Linkedin.svg',
      title:`Contact us`,
      description:`Most calendars are designed for teams. 
                   Slate is designed for freelancers`,
      image:`images/map.png`,
      }
  },

}
</script>

<style>

</style>