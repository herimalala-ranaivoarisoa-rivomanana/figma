<template>
  <section class="w-screen m-auto p-36 flex flex-row justify-around bg-background-fill ">
  <div v-for="(item, index) in Object.keys(contents.items)" :key="index" >
    <p class="text-white font-Graphik font-bold text-h5" >{{item}}</p>
    <div class="text-white font-Graphik font-normal text-h5" v-for="(el,i) in contents.items[item]" :key="i">
      {{el.name}}
    </div>
  </div>
      <div>
        <div class="flex flex-col">
          <div class="flex flex-col flex-start">
            <div class="flex  ">
              <a><div class="text-white"><icon-base class="w-8 h-8"><Address/></icon-base></div></a>
              <p class="w-313px h-66px font-Graphik font-normal text-h5 text-white">{{contents.infosContact.address}}</p>
            </div>
            <div class="flex flex-row items-center">
              <a><div class="text-white"><icon-base class="w-8 h-8"><Phone/></icon-base></div></a>
              <p class="w-137px h-43px font-Graphik font-normal text-h5 text-white">{{contents.infosContact.number}}</p>
            </div>
            <div class="flex flex-row  items-center">
              <a><div class="text-white"><icon-base class="w-8 h-8"><Envelop/></icon-base></div></a>
              <p class="w-245px h-43px font-Graphik font-normal text-h5 text-white">{{contents.infosContact.email}}</p>
            </div>
          </div>
          <img class="m-auto" :src="image" :alt="title">
          <div class="flex flex-row justify-start">
            <a><div class="text-white"><icon-base class="w-8 h-8 m-2.5" ><Tweeter/></icon-base></div></a>
            <a><div class="text-white"><icon-base class="w-8 h-8 m-2.5"><Facebook/></icon-base></div></a>
            <a><div class="text-white"><icon-base class="w-8 h-8 m-2.5"><Linkedin/></icon-base></div></a>
          </div>
        </div>
      </div>
    

  </section>
</template>

<script>
import IconBase from '../components/UI/IconBase.vue'
import Facebook from '../components/UI/socialMedia/Facebook.vue'
import Linkedin from '../components/UI/socialMedia/Linkedin.vue'
import Tweeter from '../components/UI/socialMedia/Tweeter.vue'
import Phone from '../components/UI/socialMedia/Phone.vue'
import Envelop from '../components/UI/socialMedia/Envelop.vue'
import Address from '../components/UI/socialMedia/Address.vue'

export default {
  name: 'TheFooter',
    components:{
    IconBase,
    Facebook,
    Linkedin,
    Tweeter,
    Phone,
    Address,
    Envelop,
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
