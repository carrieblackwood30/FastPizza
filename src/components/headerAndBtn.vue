<template>

  <header>

    <div class="logo-wrapper">
      <router-link to="/">
        <div class="logo">
      <img src="https://s3-alpha-sig.figma.com/img/4de5/7236/f9f670697fd9287efa7cab2cffff922e?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Sm~I-MlgFEMge-zgrXWViga3qJiUNngfhtRJ3LXTxl7vUcXsqp-36Lww-e3xAagHq~sud8Py7DxX99OCpvgRajNLGjDTQ43xOAcKXC3nf1Z3i9w0-Mw-vO3rD45Qg3Sh4u7RlW-ritFvwcSp3o2hoLfZAqM5Ix2JnkyNTnHBzfSc3A2qpZfzAHGCTH45h5nORKe5sQuwoc1rxCfxdg458HBz7IifStj3hi9nhu~CWClnyPQ2HliMzmcjCdMA70FE6Sa~s73JqvJwl7CzNkna3UiCCEehEYxAjqToonrWLzCPR4nFU2YQmY7eaEeICmcT8A5jC0o6S6aMAknKUUa8qQ__" alt="logo" width="36">
        <div class="text">
          <h3>REACT PIZZA</h3>
          <p>самая вкусная пицца во вселенной</p>
        </div>
      </div>
    </router-link>
    </div>

    <div class="button-container">
      <router-link to="cart">
        <button v-if="displayBtnOff">{{ pizzaStore.totalPiizaCost }} ₽ |<img src="../assets/cart.svg" alt="card" width="32"> {{ getPizzaLength() }}</button>
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

  router-link{
    text-decoration: none;
  }

  .logo-wrapper *{
    text-decoration: none;
    color: var(--text-color);
  }

</style>

<script setup>
import { useStore } from '@/stores/usePizzaStore';
  const pizzaStore = useStore()

  const getPizzaLength = () => pizzaStore.pickedPizzas?.null || pizzaStore.pickedPizzas.length

  const prop = defineProps({
    displayBtnOff: Boolean
  })

</script>