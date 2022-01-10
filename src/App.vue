<template>
  <TheHeader />
  <Features />
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
import Features from '@/components/Features.vue'


export default {
  name: 'App',
  components: {
    TheHeader,
    Features,
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
