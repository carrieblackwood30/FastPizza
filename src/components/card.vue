<template>
    <logo @btnDisplay="(item) => item = display" :displayOff="false" />
    <h3>card</h3>

</template>

<script setup>
import { ref } from "vue";

    const display = ref(false)

    import logo from "@/components/header.vue"

    
</script>