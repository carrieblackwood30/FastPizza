<template>

    <nav>
        <div class="nav-container" v-for="pizzaFilter in pizzas" :key="pizzaFilter">
            <button :class="`pizza-filter-${pizzaFilter.class === 'all' ? 'on' : 'off'}`" @click="pizzaFilter.class = 'all'; pizzaFilter = 'all'">все</button>
            <button :class="`pizza-filter-${pizzaFilter.class === 'meat' ? 'on' : 'off'}`" @click="pizzaFilter.class = 'meat'">мясные</button>
            <button :class="`pizza-filter-${pizzaFilter.class === 'vegan' ? 'on' : 'off'}`" @click="pizzaFilter.class = 'vegan'">Вегетарианская</button>
            <button :class="`pizza-filter-${pizzaFilter.class === 'grill' ? 'on' : 'off'}`" @click="pizzaFilter.class = 'grill'">Гриль</button>
            <button :class="`pizza-filter-${pizzaFilter.class === 'spice' ? 'on' : 'off'}`" @click="pizzaFilter.class = 'spice'">Острые</button>
            <button>Закрытые</button>
        </div>

        <div class="sort-container">
            <label for="select">Сортировка по:</label>
            <select name="categories" id="select">
                <option value="популярности">популярности</option>
                <option value="по цене">по цене</option>
                <option value="по алфавиту">по алфавиту</option>
            </select>
        </div>
    </nav>

    <main>
        <h3>Все пиццы</h3>
        <div class="pizza-container">
            <div class="pizza-card" v-for="(pizza) in pizzas[0]" :key="pizza" v-show="pizza.class.includes('vegan')"> <!--v-show-->
                <img :src="pizza.img" alt="pizza-img">
                <h3 style="text-align: center; margin: .8rem 1rem;">{{ pizza.name }}</h3>
                <div class="button-container">
                    <div class="thickness">
                        <button :class="`display-${pizza.thickness ? 'off' : 'on'}`"
                            @click="pizza.thickness = false">тонкое</button>
                        <button :class="`display-${pizza.thickness ? 'on' : 'off'}`"
                            @click="pizza.thickness = true">традиционное</button>
                    </div>
                    <div class="width">
                        <button :class="`display-${pizza.width === 26 ? 'on' : 'off'}`" @click="pizza.width = 26">26см.</button>
                        <button :class="`display-${pizza.width === 30 ? 'on' : 'off'}`" @click="pizza.width = 30">30см.</button>
                        <button :class="`display-${pizza.width === 40 ? 'on' : 'off'}`" @click="pizza.width = 40">40см.</button>
                    </div>
                </div>
                <div class="total-container">
                    <h3 style="display: inline;">от {{ pizza.cost[0] }} ₽</h3>
                    <button style="display: inline;" @click="totalPizza(pizza)">+ Добавить {{
                        pizza.cost[prisePicker(pizza)]}}</button>
                </div>
            </div>
        </div>
    </main>

</template>

<script setup>
import { useStore } from "@/stores/dataBase.js"
import axios from "axios";
import { ref } from "vue";

const pizzas = ref([])
const pizzaFilter = ref()
console.log(pizzaFilter.value)

function prisePicker(pizza) {
    if (pizza.width === 40) {
        return 2
    } else if (pizza.width === 30) {
        return 1
    } else return 0
}

axios.get("http://localhost:3000/pizzas")
    .then((response) => {
        pizzas.value.push(response.data)
        console.log(pizzas.value[0][0].class.includes('all'))
    })


</script>

<style scoped>
nav {
    width: 100%;
    justify-content: center;
    display: flex;
    gap: 20rem;
}

.nav-container {
    display: flex;
    gap: 4rem;
}

.nav-container button {
    font-size: 16px;
    font-weight: 700;
    border-radius: 20px;
    padding: 6px 12px;
}

label {
    font-size: 14px;
    font-weight: 700;
}

select {
    border: none;
    margin-left: 1rem;
    color: var(--main-color);
}

option {
    color: black;
}

main {
    margin: 2rem;
    width: 80%;
    margin-left: 14%;
}

.pizza-container {
    margin: 1rem;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 4rem;
}

.pizza-card {
    width: 280px;
    display: flex;
    flex-direction: column;
}

.button-container {
    background-color: #F3F3F3;
    padding: .2rem;
    border-radius: 10px;
}

.button-container button {
    font-size: 14px;
    font-weight: 700;
    width: 132px;
    padding: .8rem;
    margin: .4rem;
    border-radius: 10px;
}

.button-container .thickness {
    display: flex;
    justify-content: space-between;
}

.button-container .width {
    display: flex;
    justify-content: space-between;
}

.button-container .width button {
    width: 80px;
}

.display-on {
    background-color: #fff;
}

.total-container {
    display: flex;
    justify-content: space-between;
    margin: 1rem;
}

.total-container button {
    border: 2px solid var(--main-color);
    background-color: #F3F3F3;
    color: var(--main-color);
    border-radius: 20px;
    padding: 6px 12px;
    font-size: 16px;
    font-weight: 700;
}

.total-container button:hover {
    background-color: var(--main-color);
    color: #F3F3F3;
}

.pizza-filter-on {
    color: #F3F3F3;
    background-color: #282828;
}
</style>