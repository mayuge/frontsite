<template>
	  <div class=header-nav :style="{ backgroundColor:store.color  }">ムロケイタ</div> 
  <svg xmlns="http://www.w3.org/2000/svg"filter= "drop-shadow(10px 10px 5px rgba(0,0,0,0.4))" viewBox="0 0 1440 280"><path :style="{ fill: store.color }" fill="#00108c"fill-opacity="1" d="M0,224L40,197.3C80,171,160,117,240,128C320,139,400,213,480,224C560,235,640,181,720,149.3C800,117,880,107,960,117.3C1040,128,1120,160,1200,165.3C1280,171,1360,149,1400,138.7L1440,128L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z">
  </path></svg>
</template>
<script setup lang="ts">
  import { useStore } from '../stores/store.ts'
  const store = useStore()
</script>
<style scoped>
@import 'src/assets/font/fonts.css';
.header-nav {
  font-family: 'ikamodoki';
  font-size: 45px;
  color: #ffffff;
  display: flex;
  width: calc(100%-40px);
  height: 70px;
  background-color: #00108c;
  padding-top:10px;
  padding-left:40px;
}
</style>