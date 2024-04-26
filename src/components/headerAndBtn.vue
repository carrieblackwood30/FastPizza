<template>

  <header>
    <div class="logo">
    <img src="https://s3-alpha-sig.figma.com/img/4de5/7236/f9f670697fd9287efa7cab2cffff922e?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LOvUlLQmwrB3hKZZYZnKEB6ZmrjQDt6aRO9Vec~aaE4QicGrRdAvtMM8kqowe~KK7JQc1pIi-ETj9ONoSVOew02-1EFTDLXPo6mjDUEjRr9Y9tR8LRX7DdfG~8rQ5EDlvOV9ePznPX50zVUP0Rp2kbUjAnbwnC9vXUx7FslocD9ZFXdcGm-HhijAmmelh~mNcoiDoXw-iDTOZT~P2N3DuBoHyRfUXehFr4hVsDJi5~rwe2yp~84UGQRwf8tnYGeWJlX0cJtwhl7QTiBJOpmD2Y8BpEp25aSFxmwL0LP4avvwgBUv~EUTUrOYzlvp8NJcO9wbmU1rro6cRrtxEwa5cQ__" alt="logo" width="36">
    <div class="text">
      <h3>REACT PIZZA</h3>
      <p>самая вкусная пицца во вселенной</p>
    </div>
  </div>
    <div class="button-container">
      <router-link to="cart">
        <button v-if="displayBtnOff" @click="displayBtnOff = !displayBtnOff">{{ totalCost() }} ₽ |<img src="../assets/cart.svg" alt="card" width="32"> {{ pizzaLength()  }}</button>
      </router-link>
    </div>
  </header>

</template>

<style scoped>

header{
    display: flex;
    align-items: center;
    width: 100%;
  }
    
  .logo{
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 54px;
  }

  .logo h3{
    font-size: 24px;
    font-weight: 800;
  }

  .logo p{
    font-size: 16px;
    font-weight: 400;
  }

  .button-container{
    margin-left: auto;
    margin-right: 54px;
  }

  button{
    font-size: 24px;
    display: inline-flex;
    align-items: center;
    border-radius: 30px;
    padding: 1rem;
    font-weight: 700;
    background-color: var(--main-color);
    color: whitesmoke;
  }

  .display-off{
    display: none;
  }

</style>

<script setup>
import { useStore } from '@/stores/UsePizzaStorage';
import axios from 'axios';
import { computed, ref } from 'vue';

  const pizzasFromPinia = useStore()
  const totalCost = pizzasFromPinia.totalCost
  console.log(totalCost())

  const pizzaLength = () => pizzasFromPinia.pickedPizzas === null ? 0 : pizzasFromPinia.pickedPizzas.length
  const prop = defineProps({
    displayBtnOff: Boolean
  })

</script>