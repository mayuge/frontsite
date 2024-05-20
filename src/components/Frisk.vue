<template>
      <div class="frisk">
        <div class="frisk-inedge">
          <div class="top-subtitle":style="{ color: store.color }">NONE ALCOHOL</div>
          <div class="frisk-title":style="{ color: store.color }">highlisk</div>
          <div class="frisk-subtitle":style="{ color: store.color }">GEEKER'S MINT</div>
          <div class="frisk-line":style="{ backgroundColor: store.color }"></div>
          <div style="display:flex;">
            <div class="skybule-bar">
              <div class="minibar-font">HIGH LISK & HIGH RETURN</div>
            </div>
            <div class="red-bar">
              <div class="minibar-font">
                {{store.color}}
              </div>
            </div>
          </div>
        </div>
      </div>
</template>
<script setup lang="ts">
  import { useStore } from '../stores/store.ts'
  const store = useStore()
</script>
<style scoped>
	
.frisk {
  background-color:#ffffff;
  transform: rotate(10deg);
  margin-left: 50px;
  width: 700px;
  height: 350px;
  border-radius: 10px;
  border: 1px solid;
  border-color: #999bb0;
  border-bottom: solid 8px #e4e7ed;
  border-right: solid 5px #e4e7ed;
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.35);
}

.frisk-inedge {
  text-align: center;
  width: 660px;
  height: 320px;
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
  border: 1px solid;
  border-color: #999bb0;
  border-radius: 15px;
  box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.4);
}

.top-subtitle {
  font-family: 'Orbitron-m';
  color: #00108c;
  text-align: right;
  font-size: 20px;
  margin-top: 10px;
  margin-right: 20px;
}

.frisk-title {
  font-family: 'frisk'; /* frisk フォントを適用 */
  font-size: 150px;
  color: #00108c;
  margin-top:10px;
  margin-bottom:-10px;
}

.frisk-subtitle {
  font-family: 'Orbitron-m';
  letter-spacing: 10px;
  color: #00108c;
  margin-bottom: 20px;
  font-size: 20px;
}

.frisk-line {
  width: 600px;
  height: 12px;
  background-color: #00108c;
  transform: skewX(-30deg);
  margin-left: 20px;
  margin-bottom: 15px;
}

.skybule-bar {
  width: 400px;
  height: 35px;
  background-color: #00B1EB;
  margin-left: 30px;
  margin-right: 10px;
  transform: skewX(15deg);
}

.red-bar {
  font-family: BebasNeue;
  padding-top:5px;
  width: 180px;
  height: 45px;
  background-color: #E40714;
  transform: skewX(15deg);
}

.minibar-font {
  font-family: BebasNeue;
  letter-spacing: 4px;
  transform: skewX(-15deg);
  color: #ffffff;
  font-size: 26px;
}
</style>