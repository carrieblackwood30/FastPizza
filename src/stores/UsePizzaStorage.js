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
    location.reload()
  }
    pickedPizzas.value = JSON.parse(localStorage.getItem("pickedPizzas")) || []

  function totalCost(){
    const pickedPizzasCost = ref([])
    if (pickedPizzas.value.length == 0) {
      return 0
    }
    else{
      for (let i = 0; i < pickedPizzas.value.length; i++) {
        pickedPizzasCost.value.push(pickedPizzas.value[i].cost)
      }
    }
    const totalCost = pickedPizzasCost.value.reduce((a, b) => a + b)

    return totalCost
  }
  return { pizzas, pickedPizzas, getPizzas, delAllItem, totalCost }
})