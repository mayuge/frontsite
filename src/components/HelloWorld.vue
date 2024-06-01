<template>

  <div class="big-container">
    <div class="top-container">
      <Frisk/>
      <div class="sub-container">
        <div class="card-label":style="{ color: flavorColor }">FlavorPalette: {{flavorColor}}</div>
        <div class=palette-box>
            <button class="fvr-button" @click="changeFlavor('#cc0081','#ffccec')" style="background-color:#cc0081"></button>
            <button class="fvr-button" @click="changeFlavor('#05993A','#e7feee')"style="background-color:#05993A"></button>
            <button class="fvr-button" @click="changeFlavor('#FCC012','#fef2cd')"style="background-color:#FCC012"></button>
            <button class="fvr-button" @click="changeFlavor('#00108c','#e6e6e6')"style="background-color:#00108c"></button>
        </div>
        <div class="card-label":style="{ color: flavorColor }">About Me</div>
        <div class= face-box style="color:#333333">
          <div style="display:flex">
            <img src="../assets/face.png" style="width:100px;height:100px;margin-right:30px">
            <div class="face-label">大室慶太
              <div class="face-intro">通称：ムロケイタ</div>
            </div>
          </div>
          <div class="face-intro">22歳会社員。「挑戦×プロダクトデザイン」をテーマにこのサイトを作成。挑戦にはリスクがつきもの。容量、用法を守って摂取していきたい。</div>
        </div>
      </div>
    </div>
    <!-- <MiddleContainer/> -->
  </div>
</template>

<script setup lang="ts">
  import Frisk from '../components/Frisk.vue'
  import MiddleContainer from '../components/MiddleContainer.vue'
  import { ref } from 'vue'
  import { useStore } from '../stores/store'
  const store = useStore()
  let flavorColor = ref('#00108c')
  let tabletColor = ref('#e6e6e6')
  const changeFlavor = (color:string,tabletcolor:string) =>{
    //alert(color)
    flavorColor.value = color
    tabletColor.value = tabletcolor
    store.changeColor(color,tabletcolor)
  }
</script>

<style scoped>
@import '@/assets/font/fonts.css';

*{
  margin:0;
  padding:0;
}
.big-container{
  width: 100%;
}

@media(min-width:1300px){
  .top-container {

  display: flex;
  width: 100%;
  }
}
@media(max-width:1300px){
  .top-container {

/*  display: flex;*/
  width: 100%;
  }
}

.sub-container {
  width: 90%;
  height: 100%;
  margin-top:50px;
  padding-left:5%;
}
.palette-box {
  width: 95%;
  height: 120px;
  border-radius: 15px;
  padding:30px 10px 0px 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-image:url('@/assets/leather.png');
  box-shadow:  2px 2px 5px #bebebe,
             -2px -2px 2px #eeeeee;
}
.face-box {
  width: 95%;
  height: 215px;
  border-radius: 15px;
  padding:15px 10px 15px 10px;
  background-image:url('@/assets/leather.png');
  box-shadow:  2px 2px 5px #bebebe,
             -2px -2px 2px #eeeeee;
}
.face-intro{
  margin-top:15px;
  font-family:'revenge';
  font-size:21px;
}
.face-label{
  font-family:'kakutto';
  font-size:45px;
  margin-top:15px;
  margin-bottom:5px;
} 
.card-label{
  font-family:'kakutto';
  width:50%;
  font-size:30px;
  margin-top:15px;
  margin-bottom:5px;
}
.fvr-button{
  width:80px;
  height:80px;
  border-radius:50%;
  border: 5px #555555;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.35);
}
@media(max-width:450px){
  .fvr-button{
  width:60px;
  height:60px;
  border-radius:50%;
  border: 5px #555555;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.35);
  }
.palette-box {
  padding-top:20px;
  width: 95%;
  height: 80px;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  background-image:url('src/assets/leather.png');
  box-shadow:  2px 2px 5px #bebebe,
             -2px -2px 2px #eeeeee;
  }
}

</style>