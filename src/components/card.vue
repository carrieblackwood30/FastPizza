<template>
    
    <div class="cart-container">
        <div class="head">
        <h3><img src="https://www.svgrepo.com/show/60848/shopping-cart-empty-side-view.svg" width="20" alt="cart">  Корзина</h3>
            <button>
                <img src="https://icon-library.com/images/android-trash-can-icon/android-trash-can-icon-5.jpg" width="20px" alt="trash">
                <span>Очистить корзину</span>
            </button>
        </div>
        <div class="pizza-container">
            <div class="pizza" v-for="pizza in pizzas" :key="pizza">
                <img :src="pizza.img" alt="pizzaImg" width="80">
                <div class="description">
                    <h3>{{ pizza.name }}</h3>
                    {{ pizza.thickness ? "традиционное" : "тонкое" }}
                    ,{{ pizza.width }}
                </div>
                <div class="button-container">
                    <button>-</button>
                            0
                    <button>+</button>
                </div>
                <h3 style="width: 6rem;">{{ pizza.cost }} ₽</h3>

                <button class="closeBtn">x</button>
            </div>
        </div>
        <div class="tail">
            <span style="display: flex; gap: 1rem; align-items: center;">Всего пицц: <h3>{{ pizzas.length }} шт</h3></span>
            <span style="display: flex; gap: 1rem; align-items: center;">сумма заказа:
                <h3 style="color: var(--main-color)">{{ totalPrice }} ₽</h3>
            </span>
            
        </div>
    </div>

</template>

<script setup>
import axios from "axios";
import { ref } from "vue";

const pizzas = ref([])
const totalPrice = ref(0)

axios.get("http://localhost:3000/totalPizzas")
    .then((response) =>{
        pizzas.value = response.data

        for (let i = 0; i < pizzas.value.length; i++) {
            totalPrice.value = totalPrice.value + pizzas.value[i].cost
        }

    })
    
</script>

<style scoped>

.cart-container{
    margin: 2rem 14rem;
}

.head{
    font-weight: 700;
    font-size: 20px;
    display: flex;
    justify-content: space-between;
}

.head button{
    background: none;
    color: #B6B6B6;
}

.head button span{
    font-weight: 400;
    font-size: 20px;
}

.pizza-container{
    display: flex;
    flex-direction: column;
}

.pizza{
    display: flex;
    align-items: center;
    padding: 1rem;
    gap: 1.2rem;
}

.description{
    width: 16rem;
}

.button-container{
    margin: 0 8rem 0 0;
}

.button-container button{
    background: none;
    font-weight: 700;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    font-size: 24px;
    color: var(--main-color);
    border: 1px solid var(--main-color);
}

.closeBtn{
    border: 1px solid #D7D7D7;
    color: #D7D7D7;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    font-weight: 700;
}

.tail{
    display: flex;
    justify-content: space-between;
}
</style>