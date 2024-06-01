<template>
	<svg xmlns="http://www.w3.org/2000/svg"filter= "drop-shadow(0px 0px 10px rgba(0,0,0,5))" style="margin-bottom:-10px" viewBox="0 0 1440 320"><path :style="{ fill: store.color }" fill-opacity="1" d="M0,128L48,144C96,160,192,192,288,202.7C384,213,480,203,576,181.3C672,160,768,128,864,128C960,128,1056,160,1152,192C1248,224,1344,256,1392,272L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
</template>
<script setup lang="ts">
  import { useStore } from '../stores/store.ts'
  const store = useStore()
</script>