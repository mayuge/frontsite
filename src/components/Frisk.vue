<template>
      <div class="frisk" :style="{transform: 'rotateZ('+store.degree+'deg)',transition: store.animationTime+'s'}">
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
        <div class="tablet" :style="store.tablet">
        	<img v-if="store.smile" class="smile" src="../assets/smile.svg">
        </div>
      </div>
</template>
<script setup lang="ts">
  import { useStore } from '../stores/store.ts'
  const store = useStore()
</script>
<style scoped>
.smile{
	width:45px;
	height:45px;
	opacity:0.2;
}

.tablet{
	width:45px;
	height:45px;
	border-radius: 50%;
	background-image:url('src/assets/noise.png');

	color: hsl(0, 0%, 70%) !important;
	background-color: 	hsl(0, 0%, 90%);

	-webkit-box-shadow: inset rgba(255,254,255,0.6) 0 0.3em .3em, inset rgba(0,0,0,0.15) 0 -0.1em .3em, /* inner shadow */ 
						hsl(0, 0%, 60%) 0 .1em 3px, hsl(0, 0%, 45%) 0 .3em 1px, /* color border */
						rgba(0,0,0,0.2) 0 .5em 5px; /* drop shadow */
	-moz-box-shadow: 	inset rgba(255,254,255,0.6) 0 0.3em .3em, inset rgba(0,0,0,0.15) 0 -0.1em .3em, /* inner shadow */ 
						hsl(0, 0%, 60%) 0 .1em 3px, hsl(0, 0%, 45%) 0 .3em 1px, /* color border */
						rgba(0,0,0,0.2) 0 .5em 5px; /* drop shadow */
	box-shadow:		 	inset rgba(255,254,255,0.6) 0 0.3em .3em, inset rgba(0,0,0,0.15) 0 -0.1em .3em, /* inner shadow */ 
						hsl(0, 0%, 60%) 0 .1em 3px, hsl(0, 0%, 45%) 0 .3em 1px, /* color border */
						rgba(0,0,0,0.2) 0 .5em 5px; /* drop shadow */




	position:absolute ;
	bottom: 0px;
	right:100px;
	opacity: 0;
	border-top: 		1px solid rgba(255,255,255,0.8);
	border-bottom: 		1px solid rgba(0,0,0,0.1);

	z-index: -1;

}

@media (max-width:549.98px){
	.frisk {
	  background-color:#ffffff;
	  margin-top:20px;
	  margin-left: 5%;
	  width: 90%;
	  height: 200px;
	  border-radius: 10px;
	  border: 1px solid;
	  border-color: #999bb0;
	  box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.4);
	  z-index:1;
	}

	.frisk-inedge {
	  text-align: center;
	  background-color:#ffffff;
	  width: 95%;
	  height: 180px;
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
	  font-size: 10px;
	  margin-top: 10px;
	  margin-right: 20px;
	}

	.frisk-title {
	  font-family: 'frisk'; /* frisk フォントを適用 */
	  font-size: 80px;
	  color: #00108c;
	  margin-bottom:-15px;
	}

	.frisk-subtitle {
	  font-family: 'Orbitron-m';
	  letter-spacing: 6px;
	  color: #00108c;
	  margin-bottom: 10px;
	  font-size: 10px;
	}

	.frisk-line {
	  width: 90%;
	  height: 7px;	  
	  background-color: #00108c;
	  transform: skewX(-30deg);
	  margin-left: 20px;
	  margin-bottom: 15px;
	}

	.skybule-bar {
	  width: 60%;
	  height: 20px;
	  padding-top:5px;
	  background-color: #00B1EB;
	  margin-left: 5%;
	  margin-right: 10px;
	  transform: skewX(15deg);
	}

	.red-bar {
	  font-family: BebasNeue;
	  padding-top:5px;
	  width: 30%;
	  height: 20px;
	  background-color: #E40714;
	  transform: skewX(15deg);
	}

	.minibar-font {
	  font-family: BebasNeue;
	  letter-spacing: 4px;
	  transform: skewX(-15deg);
	  color: #ffffff;
	  font-size: 12px;
	}	
}

@media (min-width:550px){
	.frisk {
	  background-color:#ffffff;
	  transform: rotate(10deg);
	  margin-top:20px;
	  margin-left: 40px;
	  width: 500px;
	  height: 250px;
	  border-radius: 10px;
	  border: 1px solid;
	  border-color: #999bb0;
	  border-bottom: solid 8px #e4e7ed;
	  border-right: solid 5px #e4e7ed;
	  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.35);
	}

	.frisk-inedge {
	  text-align: center;
	  background-color:#ffffff;
	  width: 480px;
	  height: 230px;
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
	  font-size: 18px;
	  margin-top: 10px;
	  margin-right: 20px;
	}

	.frisk-title {
	  font-family: 'frisk'; /* frisk フォントを適用 */
	  font-size: 110px;
	  color: #00108c;
	  margin-bottom:-15px;
	}

	.frisk-subtitle {
	  font-family: 'Orbitron-m';
	  letter-spacing: 10px;
	  color: #00108c;
	  margin-bottom: 10px;
	  font-size: 16px;
	}

	.frisk-line {
	  width: 410px;
	  height: 12px;	  
	  background-color: #00108c;
	  transform: skewX(-30deg);
	  margin-left: 20px;
	  margin-bottom: 15px;
	}

	.skybule-bar {
	  width: 300px;
	  height: 25px;
	  background-color: #00B1EB;
	  margin-left: 30px;
	  margin-right: 10px;
	  transform: skewX(15deg);
	}

	.red-bar {
	  font-family: BebasNeue;
	  padding-top:5px;
	  width: 100px;
	  height: 30px;
	  background-color: #E40714;
	  transform: skewX(15deg);
	}

	.minibar-font {
	  font-family: BebasNeue;
	  letter-spacing: 4px;
	  transform: skewX(-15deg);
	  color: #ffffff;
	  font-size: 20px;
	}	
}


@media (min-width:1000px){
	.frisk {
	  background-color:#ffffff;
	  transform: rotate(8deg);
	  margin-top:30px;
	  margin-left: 50px;
	  width: 685px;
	  height: 340px;
	  border-radius: 10px;
	  border: 1px solid;
	  border-color: #999bb0;
	  border-bottom: solid 8px #e4e7ed;
	  border-right: solid 5px #e4e7ed;
	  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.35);
	}

	.frisk-inedge {
	  text-align: center;
	  background-color:#ffffff;
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
}


</style>