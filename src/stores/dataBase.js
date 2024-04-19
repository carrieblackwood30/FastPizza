import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore('dataBase', () => {

  const pizza = ref([
    {
      name: "Chizzy",
      cost: 25,
    },
    {
      name: "chicken Hot",
      cost: 30,
    },
  ])

  return { pizza }
})
