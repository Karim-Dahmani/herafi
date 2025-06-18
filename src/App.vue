<template>
  <NavBar />
  <main class="main-content">
    <router-view />
  </main>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
</script>

<style>
.main-content {
  margin-top: 64px;  /* same height as your .navbar */
}
</style>
