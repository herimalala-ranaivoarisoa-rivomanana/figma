<template>
  <section class="w-full m-auto">
    <div class="m-auto flex flex-wrap justify-center">
      <div class="w-477px h-532px mx-8">
           <img class="m-0" :src="image" :alt="title">
      </div>
      <div class="m-0 mx-8 w-477px h-532px align-right  flex flex-col items-start">
        <p class="m-0 mb-6 font-Graphik font-bold text-h4 text-left text-text-primary">{{title}}</p>
        <p class="m-0 mb-6 font-Graphik font-normal text-h2 text-left text-text-secondary">{{description}}</p>
        <p class="m-0 mb-6 font-Graphik font-bold text-h4 text-left text-text-primary">{{title}}</p>
        <p class="m-0 font-Graphik font-normal text-h4 text-left text-text-secondary">{{description}}</p>
        <div>
        <input class="w-273px h-54px mr-3 pl-5 rounded-full bg-email-background border-email-border"  placeholder="Your Email"/>
        <button class="mt-14 bg-blue-primary border-blue-primary rounded-full w-172px h-58px text-white ">Try for free</button> 
        </div>
      </div>
    </div>
</section>
</template>

<script>
export default {
  name:'LightCta',
  data(){
    return {
      title:`At your fingertips `,
      description:`Lightning fast prototyping `,
      image:`images/left.png`
      }
  },

}
</script>

<style>

</style>