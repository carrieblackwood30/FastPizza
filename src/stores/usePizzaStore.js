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
          pizzas.value[i].selectedWidth = 26
      }
    })
  }

  function delAllItem(){
    localStorage.clear()
    location.reload()
  }
    pickedPizzas.value = JSON.parse(localStorage.getItem("pickedPizzas")) || []

  const totalPiizaCost = computed(() => {
		return pickedPizzas.value.reduce((a, b) => (a += b.cost * b.count), 0)
	})

  const totalLength = computed(() =>{
    return pickedPizzas.value.reduce((a, b) => a+= b.count, 0 )
  })
  
  return { pizzas, pickedPizzas, getPizzas, delAllItem, totalPiizaCost, totalLength }
})