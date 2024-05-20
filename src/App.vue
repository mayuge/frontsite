<script setup lang="ts">
  import HelloWorld from './components/HelloWorld.vue'
  import Header from './components/Header.vue'
  import { useStore } from './stores/store.ts'
  const store = useStore()
</script>
<template>
  <Header/>
  <HelloWorld/>
</template>
<style> 
body{
  margin:0;
  padding:0;
  background-image:url('src/assets/leather.png');
  background-repeat: repeat;
}
</style>