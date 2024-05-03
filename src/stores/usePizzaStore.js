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

  // function getAllPizzaCost(){
  //     const pickedPizzasCost = ref([])
  //     for (let i = 0; i < pickedPizzas.value.length; i++) {
  //       pickedPizzasCost.value.push(pickedPizzas.value[i].cost * pickedPizzas.value[i].count)
  //     }
  //     return pickedPizzasCost.value.length == 0 ? 0 : pickedPizzasCost.value.reduce((a, b) => a + b)
  // }

  const getAllPizzaCost = computed(() =>{
    return pickedPizzas.value.length == 0 ? 0
    : pickedPizzas.value.reduce((a, b) => {
      a.push(b.cost * b.count)
      return a
    }, []).reduce((a, b) => a + b)
  })

  function totalLength(){
    let counter = 0 
    for (let i = 0; i < pickedPizzas.value.length; i++) {
      counter += pickedPizzas.value[i].count
    }
    return counter
  }
  
  return { pizzas, pickedPizzas, getPizzas, delAllItem, getAllPizzaCost, totalLength }
})