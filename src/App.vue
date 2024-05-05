<template>
  
  <headerAndBtn :display-btn-off="$route.path !== '/cart'"/>
  
  <RouterView />

</template>

<script setup>
import { RouterView } from 'vue-router'
import headerAndBtn from './components/headerAndBtn.vue';
</script>

<style scoped>


</style>