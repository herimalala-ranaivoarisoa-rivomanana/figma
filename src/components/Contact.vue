<template>
  <section class="w-screen h-924px mb-24 m-auto">
    <p class="m-auto mb-5 font-Graphik font-normal text-h2">{{title}}</p>
    <p class="m-auto w-552px h-100px mb-20 font-Graphik font-normal text-h3 ">{{description}}</p>
    <div class="m-auto w-1228px flex flex-row center  justify-center">
      <div class="w-453px h-669px  border-gray-900 shadow-md rounded-2xl flex flex-col items-center  ">
          <p class="m-auto mx-0 mb-12 w-335px h-130px justify-center font-Graphik font-bold text-h4 text-left text-text-primary">{{title}}</p>
          <input class="w-353px h-54px mb-12 mr-3 pl-5 rounded-2 bg-email-background border-email-border"  v-model="name"  placeholder="Your name"/>
          <input class="w-353px h-54px mb-12 mr-3 pl-5 rounded-2 bg-email-background border-email-border"  v-model="email"  placeholder="Your email"/>
          <input class="w-353px h-193px mb-12  mr-3 pl-5 rounded-2 bg-email-background border-email-border"  v-model="message"  placeholder="Your message"/>
          <button class="mt-14 mb-20 bg-blue-primary border-blue-primary rounded-full w-236px h-60px text-white ">Try for free</button>
      </div>
      <div>
        <div class="flex flex-col">
          <div class="flex flex-row justify-between">
            <div class="flex flex-col items-center">
              <a><div class="text-blue-primary"><icon-base class="w-8 h-8"><Address/></icon-base></div></a>
              <p class="w-313px h-66px font-Graphik font-normal text-h5">6386 Spring St undefined Anchorage,Georgia 12473 United States</p>
            </div>
            <div class="flex flex-col items-center">
              <a><div class="text-blue-primary"><icon-base class="w-8 h-8"><Phone/></icon-base></div></a>
              <p class="w-137px h-43px font-Graphik font-normal text-h5">(843) 555-0130</p>
            </div>
            <div class="flex flex-col items-center">
              <a><div class="text-blue-primary"><icon-base class="w-8 h-8"><Envelop/></icon-base></div></a>
              <p class="w-245px h-43px font-Graphik font-normal text-h5">willie.jennings@example.com</p>
            </div>
          </div>
          <img class="m-auto" :src="image" :alt="title">
          <div class="flex flex-row justify-start">
            <a><div class="text-blue-primary"><icon-base class="w-8 h-8 m-2.5" ><Tweeter/></icon-base></div></a>
            <a><div class="text-blue-primary"><icon-base class="w-8 h-8 m-2.5"><Facebook/></icon-base></div></a>
            <a><div class="text-blue-primary"><icon-base class="w-8 h-8 m-2.5"><Linkedin/></icon-base></div></a>
          </div>
        </div>
      </div>
    </div>
</section>
</template>

<script>
import IconBase from '../components/UI/IconBase.vue';
import Facebook from '../components/UI/socialMedia/Facebook.vue';
import Linkedin from '../components/UI/socialMedia/Linkedin.vue';
import Tweeter from '../components/UI/socialMedia/Tweeter.vue';
import Phone from '../components/UI/socialMedia/Phone.vue';
import Address from './UI/socialMedia/Address.vue'
import Envelop from './UI/socialMedia/Envelop.vue'

export default {
  name:'Contact',
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