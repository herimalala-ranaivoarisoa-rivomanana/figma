<template>
  <section class="w-full m-auto bg-background-fill">
      <div class="m-auto mb-60 pt-20 w-1177px 2xl:h-1155px xl:h-1155px lg:h-1155px">
          <p class="mb-5 font-Graphik font-normal text-h2 text-white">Pricing</p>
          <p class="w-532px 2xl:h-80px xl:h-80px lg:h-80pxm-auto mb-20 font-Graphik font-normal text-h3 text-white">{{pricingText}}</p>
          <div class="m-auto w-1105px h-693px flex flex-row items-center justify-around 
           md:flex-col sm:flex-col esm:flex-col
           md:justify-center sm:justify-center esm:justify-center">
            <div  v-for="tariff in tariffs" :key="tariff.id">
              <PriceCard :tariff="tariff"/>
            </div>
        </div>
      </div>
  </section>
</template>

<script>
import PriceCard from '@/components/PriceCard.vue';

export default {
  name: 'Pricing',
  components: {
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

</style>
