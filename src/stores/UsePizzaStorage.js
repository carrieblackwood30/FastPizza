import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useStore = defineStore('dataBase', () => {

  const pizzas = ref()
  const pickedPizzas = ref([])

  function getPizzas(){
    axios.get("http://localhost:3000/pizzas")
    .then((response) => {
      pizzas.value = response.data
    })
  }

  function delAllItem(){
    localStorage.clear()
  }

    pickedPizzas.value = JSON.parse(localStorage.getItem("pickedPizzas")) || []

  return { pizzas, pickedPizzas, getPizzas, delAllItem }
})