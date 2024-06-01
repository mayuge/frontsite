<template>
  <div class="middle-container">
    <div class="card-label" :style="{ color: store.color }">Products</div>
    <div class="product-box">
      <div class="product-card">
            <div class="product-card-label" :style="{ color: store.color }">kimi ～君だけのイベントを企画しよう～</div>
        <img src="../assets/kimi.png" alt="Product Image" class="product-image">
          <div class= tech-tag>PHP</div>
          <div class= tech-tag>Laravel</div>
        <div class= tech-tag>MySQL</div>
        <div class="product-description">

        </div>
      </div>
      <div class="product-card">
          <div class="product-card-label" :style="{ color: store.color }">AlgoGameOnline</div>       

        <img src="../assets/algo.png" alt="Product Image" class="product-image">
        <div class= tech-tag>Node.js</div>
        <div class= tech-tag>websocket</div>
        <div class="product-description">

        </div>
      </div>
      <div class="product-card">
        <div class="product-card-label" :style="{ color: store.color }">ならはwell-beingプロジェクトデモアプリ</div>
        <img src="../assets/naraha.jpg" alt="Product Image" class="product-image">
          <div class= tech-tag>Dart</div>
          <div class= tech-tag>Flutter</div>
          <div class= tech-tag>FirebaseRDB</div>
        <div class="product-description">

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
.middle-container {
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
}

.product-box {
  width: calc(100% - 30px);
  padding: 20px 15px 15px 15px;
  background-image: url('src/assets/leather.png');
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  box-shadow: 2px 2px 5px #bebebe, -2px -2px 2px #eeeeee;
}

.card-label {
  font-family: 'kakutto';
  width: 50%;
  font-size: 30px;
  margin: 15px 0px 5px 15px;
}

.product-card {
  width: 30%;
  height: 800px;
  border-radius: 5px;
  background-color: #e6e6e6;
  background-image: url('src/assets/noise.png');
  background-repeat: repeat;
  color: hsl(0, 0%, 70%) !important;
  background-color: hsl(0, 0%, 90%);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 10px; /* Add padding to create space for the image */

  -webkit-box-shadow: inset rgba(255, 254, 255, 0.6) 0 0.3em 0.3em, inset rgba(0, 0, 0, 0.15) 0 -0.1em 0.3em, /* inner shadow */
                      hsl(0, 0%, 60%) 0 0.1em 3px, hsl(0, 0%, 45%) 0 0.3em 1px, /* color border */
                      rgba(0, 0, 0, 0.2) 0 0.5em 5px; /* drop shadow */
  -moz-box-shadow: inset rgba(255, 254, 255, 0.6) 0 0.3em 0.3em, inset rgba(0, 0, 0, 0.15) 0 -0.1em 0.3em, /* inner shadow */
                    hsl(0, 0%, 60%) 0 0.1em 3px, hsl(0, 0%, 45%) 0 0.3em 1px, /* color border */
                    rgba(0, 0, 0, 0.2) 0 0.5em 5px; /* drop shadow */
  box-shadow: inset rgba(255, 254, 255, 0.6) 0 0.3em 0.3em, inset rgba(0, 0, 0, 0.15) 0 -0.1em 0.3em, /* inner shadow */
              hsl(0, 0%, 60%) 0 0.1em 3px, hsl(0, 0%, 45%) 0 0.3em 1px, /* color border */
              rgba(0, 0, 0, 0.2) 0 0.5em 5px; /* drop shadow */
}
.product-card-label {
  font-family: 'revenge';
  font-size: 20px;
  margin: 10px 0px 5px 0px;
}

.product-image {
  width: calc(100% - 20px);
  height: 70%;
  object-fit: cover;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin: 0 auto;
  margin-top: 20px;
}

.product-description {
  padding: 10px;
  text-align: center;
  height: 50%;
}

.tech-tag {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 30px;
  margin-top: 10px;
  margin-left: 10px;
  text-align: center;
  font-weight: bold;
  color: hsl(0, 0%, 60%) !important;
  background-color: hsl(0, 0%, 90%);
  background-image: url('src/assets/noise.png');
  border-top: none;
  padding-right: 1.2em;
  padding-left: 0.8em;  
  -webkit-border-radius: 5em 1em / 5em 1em;  
  -moz-border-radius: 5em 1em / 5em 1em;  
  border-radius: 5em 1em / 5em 1em;  

  -webkit-box-shadow: inset rgba(255, 254, 255, 0.6) 0 0.3em 0.3em, inset rgba(0, 0, 0, 0.15) 0 -0.1em 0.3em, /* inner shadow */
                      hsl(0, 0%, 60%) 0 0.1em 3px, hsl(0, 0%, 45%) 0 0.3em 1px, /* color border */
                      rgba(0, 0, 0, 0.2) 0 0.5em 5px; /* drop shadow */
  -moz-box-shadow: inset rgba(255, 254, 255, 0.6) 0 0.3em 0.3em, inset rgba(0, 0, 0, 0.15) 0 -0.1em 0.3em, /* inner shadow */
                   hsl(0, 0%, 60%) 0 0.1em 3px, hsl(0, 0%, 45%) 0 0.3em 1px, /* color border */
                   rgba(0, 0, 0, 0.2) 0 0.5em 5px; /* drop shadow */
  box-shadow: inset rgba(255, 254, 255, 0.6) 0 0.3em 0.3em, inset rgba(0, 0, 0, 0.15) 0 -0.1em 0.3em, /* inner shadow */
              hsl(0, 0%, 60%) 0 0.1em 3px, hsl(0, 0%, 45%) 0 0.3em 1px, /* color border */
              rgba(0, 0, 0, 0.2) 0 0.5em 5px; /* drop shadow */
}

/* Media query for screen widths 1000px or less */
@media (max-width: 1000px) {
  .product-card {
    width: 45%; /* Adjust the width to fit two cards per row */
    margin-bottom: 20px; /* Add some margin to separate rows */
  }

  .product-box {
    justify-content: space-around; /* Adjust spacing between the cards */
  }
}

/* Media query for screen widths 500px or less */
@media (max-width: 768px) {
  .product-card {
    width: 90%; /* Adjust the width to fit one card per row */
    margin-bottom: 20px; /* Add some margin to separate rows */
    margin-left: auto;
    margin-right: auto;
  }

  .product-box {
    justify-content: center; /* Center the cards */
  }
}
</style>
