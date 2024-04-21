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
    </main>

</template>

<script setup>
    import { useStore } from "@/stores/dataBase.js"

    const { pizza } = useStore()
    console.log(pizza[0].name)
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
}

</style>