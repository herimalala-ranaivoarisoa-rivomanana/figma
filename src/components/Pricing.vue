<template>
  <section class="m-auto bg-background-fill mb-20">
      <div class="m-auto">
          <p class="mb-5 font-Graphik font-normal text-h2 text-white">Pricing</p>
          <p class="m-auto max-w-552 mb-8 font-Graphik font-normal text-h3 text-white">{{pricingText}}</p>
          <div class="m-auto flex flex-row flex-wrap justify-center items-center ">
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
