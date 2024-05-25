import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore('store', () => {
  const color = ref('#00108c')
  const degree = ref(10)
  const animationTime = ref(0)
  const tablet = ref({})

  function changeColor(getcolor) {
    color.value = getcolor
    animationTime.value = 0.2
    degree.value = -10

    setTimeout(() => {
      animationTime.value = 0.4
      degree.value = 10
    }, 700)

    // バウンドしながら転がる動き
    setTimeout(() => {
      tablet.value = {
        transform: 'translate(0px, 100px) rotate(15deg)',
        transition: '0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55)',
        opacity: '1'
      }
    }, 850)

    setTimeout(() => {
      tablet.value = {
        transform: 'translate(0px, 0px) rotate(15deg)',
        transition: '0.2s cubic-bezier(0.68, -0.55, 0.27, 1.55)',
        opacity: '0'
      }
    }, 2000)

  }

  return { color, changeColor, degree, animationTime, tablet }
})
