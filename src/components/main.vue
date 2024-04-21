<template>

    <nav>
        <div class="nav-container">
            <button>все</button>
            <button>мясные</button>
            <button>Вегетарианская</button>
            <button>Гриль</button>
            <button>Острые</button>
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
            <div class="pizza-card" v-for="pizza in pizzas[0]" :key="pizza">
                <img :src="pizza.img" alt="pizza-img">
                <h3 style="text-align: center;">{{ pizza.name }}</h3>
                <div class="button-container">
                    <div class="thickness">
                    <button>тонкое</button>
                    <button>традиционное</button>
                </div>
                <div class="width">
                    <button>26 см.</button>
                    <button>30 см.</button>
                    <button>40 см.</button>
                </div>
                </div>
                <h3 style="display: inline;">{{ pizza.cost }}<button style="display: inline;">+ Добавить 'cena'</button></h3>
            </div>
        </div>
    </main>

</template>

<script setup>
    import { useStore } from "@/stores/dataBase.js"
    import axios from "axios";
    import { ref } from "vue";

    const pizzas = ref([])

    axios.get("http://localhost:3000/pizzas")
    .then((response) =>{
        pizzas.value.push(response.data)
        console.log(pizzas.value[0])
    })


</script>

<style scoped>

nav{
    width: 100%;
    justify-content: center;
    display: flex;
    gap: 20rem;
}

.nav-container{
    display: flex;
    gap: 4rem;
}

.nav-container button{
    font-size: 16px;
    background: transparent;
    font-weight: 700;
}

label{
    font-size: 14px;
    font-weight: 700;
}

select{
    border: none;
    margin-left: 1rem;
    color: var(--main-color);
}

option{
    color: black;
}

main{
    margin: 2rem;
    width: 80%;
    margin-left: 14%;
}

.pizza-container{
    margin: 1rem;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 4rem;
}

.pizza-card{
    width: 280px;
    display: flex;
    flex-direction: column;
}

.button-container{
    background-color: #F3F3F3;
    border-radius: 10px;
}

.button-container button{
    font-size: 14px;
    font-weight: 700;
    width: 132px;
    padding: .8rem;
}

.button-container .width button{
    width: 86px;
}

</style>