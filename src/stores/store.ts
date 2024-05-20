import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore('store', () => {
  const color = ref('#00108c')
  function changeColor(getcolor) {
    this.color = getcolor
  }

  return { color, changeColor }
})
