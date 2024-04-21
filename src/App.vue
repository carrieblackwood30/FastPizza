<template>
  
  <headerAndBtn :display-btn-off="$route.path == '/'"/>
  <RouterView />

</template>

<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'
import headerAndBtn from './components/headerAndBtn.vue';


</script>

<style scoped>


</style>