<template>
  <section :class="sWidth<780?`w-full m-auto p-36 flex flex-col items-center bg-background-fill`:
                            `w-full m-auto p-36 flex flex-row justify-around bg-background-fill`">
    <div class="m-5" v-for="(item, index) in Object.keys(contents.items)" :key="index" >
      <p class="text-white font-Graphik font-bold text-h5" >{{item}}</p>
      <div class="text-white m-5 font-Graphik font-normal text-h5" v-for="(el,i) in contents.items[item]" :key="i">
        {{el.name}}
      </div>
    </div>
    <div class="flex flex-col">
      <div class="flex flex-col flex-start">
        <div :class="isMobile?`flex flex-row justify-center`:`flex flex-col items-center`"
              v-for="(media,index) in datas.mediaCom" :key="index" >
          <a><div class="text-white"><img  :src="media.link" alt="media.name"/></div></a>
          <p class="w-313px h-66px font-Graphik font-normal text-h5 text-white">{{media.detail}}</p>
        </div>
      <img class="m-auto mb-2.5" :src="image" :alt="title">
      <div class="flex justify-around">
        <div v-for="(media,index) in datas.socialMedia" :key="index" class="flex flex-row justify-between">
          <a><img :src="media.link" alt ="media.name"></a>
        </div>
      </div>
    </div>
    </div>
      
    

  </section>
</template>

<script>

export default {
  name: 'TheFooter',
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
    contents:{
      items:{pages:[{name:'Home', url:''},{name:'Product', url:''},{name:'Pricing', url:''},
             {name:'About', url:''},{name:'Contact', url:''}],
             contactList1:[{name:'Eleanor Edwards', url:''},{name:'Ted Robertson', url:''},{name:'Annette Russell', url:''},
             {name:'Jennie Mckinney', url:''},{name:'Gloria Richards', url:''}],
             contactList2:[{name:'Philip Jones', url:''},{name:'Colleen Russell', url:''},{name:'Marvin Hawkins', url:''},
             {name:'Bruce Simmmons', url:''}],
             },
      infosContact:{
        address:'6386 Spring St undefined Anchorage, Georgia 12473 United States',
        email:'willie.jennings@example.com',number:'(843) 555-0130'
      }
    }    
    }
  }
}
</script>

<style>

</style>
