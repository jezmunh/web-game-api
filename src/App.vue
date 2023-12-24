<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import GameCard from './components/GameCard.vue'

</script>

<template>
  <div class="app">
    <Header />
    <RouterView />
  </div>

  
</template>

<style scoped>
.app {
  width: 100%;  
  min-height: 100vh;
  background: #272b30;
}
</style>
