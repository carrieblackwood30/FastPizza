<template>
    <h3>card</h3>

</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute()
console.log(route.path)
    
</script>