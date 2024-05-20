<template>

  <div class="big-container">
    <div class="top-container">
      <Frisk/>
      <div class="sub-container">
        <div class="card-label":style="{ color: flavorColor }">FlavorPalette: {{flavorColor}}</div>
        <div class=palette-box>
            <button class="fvr-button" @click="changeFlavor('#cc0081')" style="background-color:#cc0081"></button>
            <button class="fvr-button" @click="changeFlavor('#05993A')"style="background-color:#05993A"></button>
            <button class="fvr-button" @click="changeFlavor('#FCC012')"style="background-color:#FCC012"></button>
            <button class="fvr-button" @click="changeFlavor('#00108c')"style="background-color:#00108c"></button>
        </div>
        <div class="card-label":style="{ color: flavorColor }">Skills</div>
        <div class= skill-box>
          
        </div>
      </div>
    </div>
    <div class="middle-container">
      <div class="card-label":style="{ color: flavorColor }">Products</div>
      <div class="product-box">
        
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import Frisk from '../components/Frisk.vue'
  import { ref } from 'vue'
  import { useStore } from '../stores/store.ts'
  const store = useStore()
  let flavorColor = ref('#00108c')

  const changeFlavor = (color:string) =>{
    //alert(color)
    flavorColor.value = color
    store.changeColor(color)
  }
</script>

<style scoped>
@import 'src/assets/font/fonts.css';

.big-container{
  margin: 0;
  padding: 0;
  width: 100%;
  height:100vh;
}

.top-container {
  margin: 0;
  padding: 0;
  display: flex;
  width: 100%;
}


.sub-container {
  width: 100%;
  height: 100%;
  padding-left:5%;
}
.palette-box {
  padding-top:30px;
  width: 95%;
  height: 120px;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  background-image:url('src/assets/leather.png');
  box-shadow:  2px 2px 5px #bebebe,
             -2px -2px 2px #eeeeee;
}
.skill-box {
  width: 95%;
  height: 200px;
  border-radius: 15px;
  background-image:url('src/assets/leather.png');
  box-shadow:  2px 2px 5px #bebebe,
             -2px -2px 2px #eeeeee;
}
.card-label{
  font-family:'kakutto';
  font-size:30px;
  margin-top:15px;
  margin-bottom:5px;
}
.fvr-button{
  width:80px;
  height:80px;
  border-radius:80px;
  border: 5px #555555;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.35);
}
.middle-container{
  width:95%;
  height:100%;
  padding-left:2.5%;
}

.product-box{
  width: 100%;
  height: 500px;
  border-radius: 15px;
  background-image:url('src/assets/leather.png');
  box-shadow:  2px 2px 5px #bebebe,
             -2px -2px 2px #eeeeee;
}
</style>
