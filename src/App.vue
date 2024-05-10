<template>
  
  <headerAndBtn :display-btn-off="$route.path !== '/cart' && !!$route.path"/>
  
  <RouterView />

</template>

<script setup>
  import { RouterView } from 'vue-router'
  import headerAndBtn from './components/headerAndBtn.vue';
</script>