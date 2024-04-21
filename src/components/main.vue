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
                <h3>{{ pizza.name }}</h3>
                <img :src="pizza.img" alt="pizza-img">
                <h3>{{ pizza.cost }}</h3>
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
    margin-left: 18rem;
}

.pizza-container{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 4rem;
}

.pizza-card{
    width: 280px;
}

</style>