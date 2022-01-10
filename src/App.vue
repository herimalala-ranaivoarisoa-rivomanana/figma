<template>
  <TheHeader />
  <Features />
  <HeroLight />
  <LightCta />
  <Partners/>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
import Features from '@/components/Features.vue'
import HeroLight from '@/components/HeroLight.vue'
import LightCta from '@/components/LightCta.vue'
import Partners from '@/components/Partners.vue'


export default {
  name: 'App',
  components: {
    TheHeader,
    Features,
    HeroLight,
    LightCta,
    Partners,
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
