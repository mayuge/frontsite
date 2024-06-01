<script setup lang="ts">
  import HelloWorld from './components/HelloWorld.vue'
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
  import { useStore } from './stores/store'
  const store = useStore()
</script>
<template>
  <Header/>
  <HelloWorld/>
  <Footer/>
</template>
<style> 
body{
  margin:0;
  padding:0;
  background-image:url('src/assets/leather.png');
  background-repeat: repeat;
}
</style>