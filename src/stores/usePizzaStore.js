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

  const getAllPizzaCost = computed(() =>{
    return pickedPizzas.value.length == 0 ? 0
    : pickedPizzas.value.reduce((a, b) => a += b.cost * b.count, 0)
  })

  function totalLength(){
    let count = 0
    for (let i = 0; i < pickedPizzas.value.length; i++) {
      count += pickedPizzas.value[i].count
    }
    return count
  }
  
  return { pizzas, pickedPizzas, getPizzas, delAllItem, getAllPizzaCost, totalLength }
})