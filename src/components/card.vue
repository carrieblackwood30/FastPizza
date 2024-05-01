<template>
    
    <div class="cart-container" v-if="pizzaStore.pickedPizzas.length > 0">
        <div class="head">
        <h3><img src="https://www.svgrepo.com/show/60848/shopping-cart-empty-side-view.svg" width="20" alt="cart">  Корзина</h3>
            <button @click="pizzaStore.delAllItem()">
                <img src="https://icon-library.com/images/android-trash-can-icon/android-trash-can-icon-5.jpg" width="20px" alt="trash">
                <span>Очистить корзину</span>
            </button>
        </div>
        <div class="pizza-container">
            <div class="pizza" v-for="pizza in pizzaStore.pickedPizzas" :key="pizza.id">
                <img :src="pizza.img" alt="pizzaImg" width="80">
                <div class="description">
                    <h3>{{ pizza.name }}</h3>
                    {{ pizza.thickness ? "традиционное" : "тонкое" }}
                    ,{{ pizza.width }}
                </div>
                <div class="button-container">
                    <button @click="decreaseBtn(pizza)">-</button>
                        {{ pizza.count }}
                    <button @click="increaseBtn(pizza)">+</button>
                </div>
                <h3 style="width: 6rem;">{{ computedCost(pizza) }} ₽</h3>

                <button class="closeBtn" @click="delItem(pizza)">x</button>
            </div>
        </div>
        <div class="tail">
            <span style="display: flex; gap: 1rem; align-items: center;">Всего пицц: <h3>{{ pizzaStore.totalLength() }} шт</h3></span>
            <span style="display: flex; gap: 1rem; align-items: center;">сумма заказа:
                <h3 style="color: var(--main-color)">{{ pizzaStore.getAllPizzaCost() }} ₽</h3>
            </span>
        </div>

        <div class="backBtnContainer">
            <router-link to="/" class="backBtn"> Вернуться назад</router-link>
            <button class="payBtn"> Оплатить сейчас</button>
        </div>
    </div>

    <div class="emptyCard" v-else>

        <div class="emptyDescription">
            <h3>Корзина пустая 😕</h3>
            <p>Вероятней всего, вы не заказывали ещё пиццу.</p>
            <p>Для того, чтобы заказать пиццу, перейди на главную страницу.</p>
        </div>

        <img src="../assets/manWithCart.svg" width="400" alt="manWithCart">
        <router-link class="emptyBackBtn" to="/">Вернуться назад</router-link>
    </div>

</template>

<script setup>
import { useStore } from "@/stores/usePizzaStore";

const pizzaStore = useStore()
const computedCost = (pizza) => pizza.cost * pizza.count

function decreaseBtn(pizza){
    const decreasePizza = pizzaStore.pickedPizzas.find(item => (item.id === pizza.id) && (item.width === pizza.width) && (item.thickness === pizza.thickness))
    if (decreasePizza.count > 1) {
        decreasePizza.count--
    }else{
        const confirmDel = confirm(`вы хотите убрать из списка ${pizza.name}?`)
        confirmDel ? delItem(pizza) : decreaseBtn.count = 1
    }
    localStorage.setItem("pickedPizzas", JSON.stringify(pizzaStore.pickedPizzas))
}

function increaseBtn(pizza){
    const decreasePizza = pizzaStore.pickedPizzas.find(item => (item.id === pizza.id) && (item.width === pizza.width) && (item.thickness === pizza.thickness))
    decreasePizza.count++
    localStorage.setItem("pickedPizzas", JSON.stringify(pizzaStore.pickedPizzas))
}

function delItem(pizza){
    const deletingItem = pizzaStore.pickedPizzas.find(item => (item.id === pizza.id) && (item.width === pizza.width) && (item.thickness === pizza.thickness))

    if (pizzaStore.pickedPizzas.length > 1) {
        pizzaStore.pickedPizzas.splice(deletingItem, 1)
    }else if(pizzaStore.pickedPizzas.length == 1){
        pizzaStore.pickedPizzas.splice(deletingItem)
    }

    localStorage.setItem("pickedPizzas", JSON.stringify(pizzaStore.pickedPizzas))
}
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

.backBtnContainer{
    display: flex;
    margin-top: 1rem;
    justify-content: space-between;
}

.payBtn{
    background-color: var(--main-color);
    border-radius: 20px;
    padding: .8rem 1rem;
    color: #f3f3f3;
    font-weight: 700;
    font-size: 1rem;
}

.backBtn{
    border:1px solid #D3D3D3;
    color: #D3D3D3;
    border-radius: 20px;
    padding: .8rem 1rem;
    text-decoration: none;
}

.emptyCard{
    margin: 2rem 14rem;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
}

.emptyCard h3{
    font-size: 32px;
    font-weight: 700;
}

.emptyCard p{
    font-size: 18px;
    font-weight: 400;
}

.emptyBackBtn{
    background-color: #282828;
    color: #FFFFFF;
    font-weight: 700;
    font-size: 32px;
    border-radius: 20px;
    padding: .8rem 1rem;
    text-decoration: none;
}
</style>