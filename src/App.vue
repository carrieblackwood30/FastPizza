<template>
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<style scoped>

  .logo{
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 92;
  }

  .logo h3{
    font-size: 24px;
    font-weight: 800;
  }

  .logo p{
    font-size: 16px;
    font-weight: 400;
  }

</style>
