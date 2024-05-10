<template>

    <nav>
        <div class="nav-container">
            <div v-for="filteredPizza in pizzaClasses" :key="filteredPizza">
                <button :class="`pizza-filter-${filteredPizzaValue === filteredPizza ? 'on' : 'off'}`" @click= "filteredPizzaValue = filteredPizza">{{ filteredPizza }}</button>
            </div>
        </div>

        <div class="sort-container">
            <label for="select">Сортировка по:</label>
            <select name="categories" id="select" @change="sortPizzas($event)"> 
                <option value="популярности">популярности</option>
                <option value="по цене">по цене</option>
                <option value="по алфавиту">по алфавиту</option>
            </select>
        </div>
    </nav>

    <main>
        <h3 class="allPizza">Все пиццы</h3>
        <div class="pizza-container">
            <div class="pizza-card" v-for="(pizza) in pizzaStore.pizzas " :key="pizza.id" v-show="pizza.class.includes(filteredPizzaValue)">
                <img :src="pizza.img" alt="pizza-img">
                <h3 class="pizzaName">{{ pizza.name }}</h3>
                <div class="button-container">
                    <div class="thickness">
                        <button :class="`display-${pizza.thickness ? 'off' : 'on'}`"
                            @click="pizza.thickness = false">тонкое</button>
                        <button :class="`display-${pizza.thickness ? 'on' : 'off'}`"
                            @click="pizza.thickness = true">традиционное</button>
                    </div>
                    <div class="width">
                        <button  v-for="pizzaWidth in pizza.width" :key="pizzaWidth" 
                            :class="`display-${pizza.selectedWidth === pizzaWidth ? 'on' : 'off'}`" 
                            @click="pizza.selectedWidth = pizzaWidth">
                            {{ pizzaWidth }}
                        </button>
                    </div>
                </div>
                <div class="total-container">
                    <h3>от {{ pizza.cost[0] }} ₽</h3>
                    <button @click="addToCart(pizza)"> + Добавить{{ pizza.cost[getPizzaWidthIndex(pizza)]}} 
                        <span :class="`${getPizzaCount(pizza) !== '' ? 'counter' : ''}`">
                            {{ getPizzaCount(pizza) }}
                        </span>
                    </button>
                </div>
            </div>
        </div>
    </main>

</template>

<script setup>
import { useStore } from "@/stores/usePizzaStore.js"
import { onBeforeMount, ref } from "vue";

const pizzaStore = useStore()

onBeforeMount(() => pizzaStore.getPizzas())

const filteredPizzaValue = ref('все')
const pizzaClasses = [ 'все', 'мясные', 'вегетарианские', 'гриль', 'острые', 'закрытые' ]

const getPizzaCount = (pizza) =>{
    const counter = pizzaStore.pickedPizzas.find(item => (item.id === pizza.id) && (item.width === pizza.selectedWidth) && (item.thickness === pizza.thickness))
    return counter?.count || ''
}

function getPizzaWidthIndex(pizza) {
    if (pizza.selectedWidth === 40) {
        return 2
    } else if (pizza.selectedWidth === 30) {
        return 1
    } else return 0
}

function addToCart(pizza){
    const existingPizza = pizzaStore.pickedPizzas.find(item => (item.id === pizza.id) && (item.width === pizza.selectedWidth) && (item.thickness === pizza.thickness))

    if(existingPizza){
        existingPizza.count++
    }else{
        pizzaStore.pickedPizzas.push({
        id: pizza.id,
        name: pizza.name,
        img: pizza.img,
        thickness: pizza.thickness,
        width: pizza.selectedWidth,
        cost: pizza.cost,
        count: 1
    })
    }

    localStorage.setItem("pickedPizzas", JSON.stringify(pizzaStore.pickedPizzas))
}


function sortPizzas($event){
    if ($event.target.value === 'по алфавиту') {
        pizzaStore.pizzas = pizzaStore.pizzas.sort((a,b) =>{
        if(a.name < b.name) return -1
        if(a.name > b.name) return 1
        return 0
    })
    }
    else if($event.target.value === 'по цене'){
        pizzaStore.pizzas = pizzaStore.pizzas.sort((a,b) =>{
            if(a.cost < b.cost) return -1
            if(a.cost > b.cost) return 1
            return 0
        })
    }
    else if($event.target.value === 'популярности'){
        pizzaStore.pizzas = pizzaStore.pizzas.sort((a,b) =>{
            if(a.popularity < b.popularity) return -1
            if(a.popularity > b.popularity) return 1
            return 0
        })
    }
}


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
    gap: 2rem;
}

.nav-container button {
    font-size: 16px;
    font-weight: 700;
    border-radius: 20px;
    padding: 12px 24px;
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

.allPizza{
    font-size: 36px;
    font-weight: 800;
    margin: 1rem 0 2rem;
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

.pizzaName{
    text-align: center;
    margin: .8rem 1rem;
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
    align-items: center;
    margin: 1rem;
}

.total-container button {
    border: 2px solid var(--main-color);
    background-color: #F3F3F3;
    color: var(--main-color);
    border-radius: 20px;
    padding: 12px 12px;
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

.counter{
    background-color: var(--main-color);
    color: #F3F3F3;
    padding: .2rem .4rem;
    border-radius: 50%;
}

button:hover .counter{
    background-color: #f3f3f3;
    color: var(--main-color);
}
</style>