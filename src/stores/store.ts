import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore('store', () => {
  const color = ref('#00108c')
  const degree = ref(10)
  const animationTime = ref(0)
  const tabletTime = ref(0)
  const moveX = ref(0)
  const moveY = ref(0)
  const opacity = ref(0)  // 初期値を 1 に設定

  function changeColor(getcolor) {
    opacity.value = 1
    color.value = getcolor
    animationTime.value = 0.2
    degree.value = -10

    setTimeout(() => {
      animationTime.value = 0.5
      degree.value = 10
    }, 700)

    setTimeout(()=>{
      tabletTime.value = 0.2
      moveX.value = -15
      moveY.value = 100
    },1000)

    setTimeout(()=>{
      tabletTime.value = 0
      opacity.value = 0
      moveX.value = 0
      moveY.value = 0
    },3000)
    
  }

  return { color, changeColor, degree, animationTime, tabletTime, moveX, moveY, opacity }
})
