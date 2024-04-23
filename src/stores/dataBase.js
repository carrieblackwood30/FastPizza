import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore('dataBase', () => {

  const pizza = ref([])

  return { pizza }
})
