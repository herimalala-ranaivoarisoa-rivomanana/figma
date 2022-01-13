<template>
  <TheHeader :icons="icons" :isMobile="mobile" />
  <Features />
  <HeroLight />
  <LightCta />
  <Partners/>
  <Testimonials />
  <Pricing />
  <Contact />
  <TheFooter/>
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
    height: document.documentElement.clientHeight,
      icons:{
      socialMedia:[
          {id:1,name:'tweeter',link:"sources/tweeter.svg"},
          {id:2,name:'facebook',link:"sources/facebook.svg"},
          {id:2,name:'linkedin',link:"sources/linkedin.svg"},
          ],
      mediaCom:[
          {id:3,name:'address',link:"sources/address.svg"},
          {id:1,name:'phone',link:"sources/phone.svg"},
          {id:2,name:'email',link:"sources/email.svg"},
          ],
      logo:{id:1,name:'logo',link:"sources/dark.svg"}
      }
    }
  },
  computed: {
  mobile() {
      return this.width <1024 ? true : false

    }
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
      this.height = document.documentElement.clientHeight;
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
