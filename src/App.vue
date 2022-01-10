<template>
  <TheHeader />
  <Features />
  <HeroLight />
  <LightCta />
  <Partners/>
  <Testimonials />
  <div class="m-auto pt-20 w-fullscreen h-1155px bg-gray-600 ">
      <p class="mb-5 font-Graphik font-normal text-h2 text-white">Pricing</p>
      <p class="mb-20 font-Graphik font-normal text-h3 text-white">{{pricingText}}</p>
      <div class="m-auto w-1105px h-693px flex flex-row items-center justify-around ">
        <div  v-for="tariff in tariffs" :key="tariff.id">
          <PriceCard :tariff="tariff"/>
        </div>
    </div>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import Features from '@/components/Features.vue';
import HeroLight from '@/components/HeroLight.vue';
import LightCta from '@/components/LightCta.vue';
import Partners from '@/components/Partners.vue';
import Testimonials from '@/components/Testimonials.vue';
import PriceCard from '@/components/PriceCard.vue';

export default {
  name: 'App',
  components: {
    TheHeader,
    Features,
    HeroLight,
    LightCta,
    Partners,
    Testimonials,
    PriceCard
  },
    data(){
    return {
      pricingText:`Most calendars are designed for teams. 
              Slate is designed for freelancers`,
      tariffs:[{id:1,name:"FREE",price:0,shortDesc:"Organize across all apps by hand",
      features:["Pricing feature","Pricing feature","Pricing feature","Pricing feature",
                "Pricing feature",]},  
               {id:2,name:"STANDARD",price:10,shortDesc:"Organize across all apps by hand",
      features:["Pricing feature","Pricing feature","Pricing feature","Pricing feature",
                "Pricing feature",]}, 
               {id:3,name:"BUSINESS",price:99,shortDesc:"Organize across all apps by hand",
      features:["Pricing feature","Pricing feature","Pricing feature","Pricing feature",
                "Pricing feature",]}, 
      ]     
    }
  }
}
</script>

<style>

#app {
  font-family: Graphik,Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin:0;
  padding:0;
}
</style>
