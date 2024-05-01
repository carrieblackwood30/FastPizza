import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useStore = defineStore('pizza', () => {

  const pizzas = ref()
  const pickedPizzas = ref([])

  function getPizzas(){
    axios.get("http://localhost:3000/pizzas")
    .then((response) => {
      pizzas.value = response.data
      for (let i = 0; i < pizzas.value.length; i++) {
        pizzas.value[i].width = 26
      }
    })
  }

  function delAllItem(){
    localStorage.clear()
    location.reload()
  }
    pickedPizzas.value = JSON.parse(localStorage.getItem("pickedPizzas")) || []

  function getAllPizzaCost(){
      const pickedPizzasCost = ref([])
      for (let i = 0; i < pickedPizzas.value.length; i++) {
        pickedPizzasCost.value.push(pickedPizzas.value[i].cost * pickedPizzas.value[i].count)
      }
      return pickedPizzasCost.value.length == 0 ? 0 : pickedPizzasCost.value.reduce((a, b) => a + b)
  }

  const getAllPizzaCost2 = computed(() =>{
    return pickedPizzas.value.length == 0 ? 0
    : pickedPizzas.value.reduce((a, b) => ( a.cost * b.count) + (a.cost * b.count))
  })

  function totalLength(){
    for (let i = 0; i < pickedPizzas.value.length; i++) {
      return pickedPizzas.value.length * pickedPizzas.value[i].count
    }
  }
  
  return { pizzas, pickedPizzas, getPizzas, delAllItem, getAllPizzaCost, totalLength, getAllPizzaCost2 }
})