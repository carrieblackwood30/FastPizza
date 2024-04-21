<template>
  
  <headerAndBtn :display-btn-off="$route.path !== 'cart'"/>
  <RouterView />

</template>

<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'
import headerAndBtn from './components/headerAndBtn.vue';

const route = useRoute()
console.log(route.path)

</script>

<style scoped>


</style>