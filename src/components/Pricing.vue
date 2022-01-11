<template>
  <TheHeader />
  <div class="m-auto mb-60 pt-20 w-1177px h-1155px bg-gray-600 ">
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
