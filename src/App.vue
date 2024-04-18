<template>
  <logo />
  <mainContent />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import logo from "./components/header.vue"
import mainContent from "./components/main.vue"
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
