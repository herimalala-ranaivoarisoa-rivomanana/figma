<template>
  <div v-if="tariff.id%2===0">
    <div class="m-auto w-335px h-693px py-11 rounded-xl bg-blue-primary border-blue-primary flex flex-col align-center">
      <p class="m-auto font-Graphik font-bold text-h4 text-white">{{tariff.name}}</p>
      <div class="flex justify-center">
        <p class="mr-2.5 font-Graphik font-bold text-h1 text-white">{{tariff.price}}</p>
        <div class="mt-2.5 flex flex-col items-start">
          <p class="font-Graphik font-bold text-h5 text-white">$</p>
          <p class="font-Graphik font-normal text-link text-white">Per Month</p>
        </div>
      </div>
      <p class="m-auto font-Graphik font-bold text-h4 text-white">{{tariff.name}}</p>
      
      
      <div v-for="(feature,index) in tariff.features" :key="index">
        <p class="m-auto font-Graphik font-normal text-link text-white">{{feature}}</p>
      </div>
      <button class="w-236px h-56px m-auto bg-white border-white rounded-full 
                    font-Graphik font-normal text-h4 justify-center">
                    Try for free
      </button>
    </div>
  </div>
  <div v-else>
    <div class="m-auto w-335px h-607px rounded-xl bg-white border-white flex flex-col align-center">
      <p class="m-auto font-Graphik font-bold text-h4">{{tariff.name}}</p>
      <div class="flex justify-center">
        <p class="mr-2.5 font-Graphik font-bold text-h1">{{tariff.price}}</p>
        <div class="mt-2.5 flex flex-col items-start">
          <p class="font-Graphik font-bold text-h5 ">$</p>
          <p class="font-Graphik font-normal text-link">Per Month</p>
        </div>
      </div>
      <p class="m-auto font-Graphik font-bold text-h4">{{tariff.name}}</p>
      
      
      <div v-for="(feature,index) in tariff.features" :key="index">
        <p class="m-auto">{{feature}}</p>
      </div>
      <button class="w-236px h-56px m-auto  bg-blue-primary border-blue-primary rounded-full 
                    font-Graphik font-normal text-h4 justify-center">
                    Try for free
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name:'PriceCard',
    props: {
    tariff: {
        type: Object
    }
  }

}
</script>

<style>

</style>