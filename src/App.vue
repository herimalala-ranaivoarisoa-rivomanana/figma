<template>
  <TheHeader :isMobile="mobile" :datas="datas" :sWidth="sWidth" :screen="screen" />
  <Features :isMobile="mobile" :datas="datas" :sWidth="sWidth"/>
  <HeroLight :isMobile="mobile" :datas="datas" :sWidth="sWidth"/>
  <LightCta :isMobile="mobile" :datas="datas" :sWidth="sWidth"/>
  <Partners :isMobile="mobile" :datas="datas" :sWidth="sWidth"/>
  <Testimonials :isMobile="mobile" :datas="datas" :sWidth="sWidth"/>
  <Pricing :isMobile="mobile" :datas="datas" :sWidth="sWidth"/>
  <Contact :isMobile="mobile" :datas="datas" :sWidth="sWidth"/>
  <TheFooter :isMobile="mobile" :datas="datas" :sWidth="sWidth"/>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';
import Features from '@/components/Features.vue';
import HeroLight from '@/components/HeroLight.vue';
import LightCta from '@/components/LightCta.vue';
import Partners from '@/components/Partners.vue';
import Testimonials from '@/components/Testimonials.vue';
import Pricing from '@/components/Pricing.vue';
import Contact from '@/components/Contact.vue';

export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter,
    Features,
    HeroLight,
    LightCta,
    Partners,
    Testimonials,
    Pricing,
    Contact,
  },
    data(){
    return {
    width: document.documentElement.clientWidth,
    screen:'2xl',
      datas:{
      socialMedia:[
          {id:1,name:'tweeter',link:"sources/socialMedia/Background/tweeter.svg",href:"https://twitter.com/figmadesign"},
          {id:2,name:'facebook',link:"sources/socialMedia/Background/facebook.svg",href:"https://www.facebook.com/figmadesign"},
          {id:2,name:'linkedin',link:"sources/socialMedia/Background/linkedin.svg",href:"https://www.linkedin.com/company/figma/"},
          ],
      mediaCom:[
          {id:3,name:'address',detail:'6386 Spring St undefined Anchorage,Georgia 12473 United States', link:"sources/mediaCom/address.svg"},
          {id:1,name:'phone',detail:'(843) 555-0130', link:"sources/mediaCom/phone.svg"},
          {id:2,name:'email',detail:'willie.jennings@example.com', link:"sources/mediaCom/email.svg"},
          ],
      logo:{id:1,name:'logo',link:"sources/dark.svg"},
      },
    }
  },
  computed: {
  mobile() {
      return this.width <640 ? true : false
    },
  sWidth(){
      return this.width
  },
  },

  mounted() {
    window.addEventListener('resize', this.getDimensions);
  },
  unmounted() {
    window.removeEventListener('resize', this.getDimensions);
  },
  methods: {
    getDimensions() {
      this.width = document.documentElement.clientWidth;
      if(this.width<=640) this.screen='sm'
      if(this.width>640 && this.width<768) this.screen='md'
      if(this.width>=768 && this.width<1024) this.screen='lg'
      if(this.width>=1204 && this.width< 1536) this.screen='xl'
      if (this.width>=1536) this.screen='2xl'
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
