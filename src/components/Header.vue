// src/components/Header.vue
<template>
  <header>
    <div class="container header-inner">
      <router-link to="/" class="logo">
        <div class="logo-icon">
          <img src="../assets/logo.jpeg" alt="Herafi logo" />
        </div>
        <span class="logo-text">HERAFI</span>
      </router-link>
      <nav>
        <router-link to="/">Accueil</router-link>
        <router-link to="/services">Nos Services</router-link>
        <router-link to="/marketplace">Marketplace</router-link>
        <router-link to="/contact">Contact</router-link>
      </nav>
      <router-link to="/login" class="account-btn">Compte</router-link>
    </div>
  </header>
</template>
<script>
export default {
  name: 'Header'
};
</script>
<style scoped>
.container { display: flex; align-items: center; justify-content: space-between; padding: 1rem; }
.logo { display: flex; align-items: center; gap: 0.75rem; }
.logo-icon img { width: 40px; }
.logo-text { font-size: 1.5rem; font-weight: bold; color: var(--blue-900); }
nav { display: none; gap: 1.5rem; }
.account-btn { padding: 0.5rem 1rem; border: 1px solid var(--blue-800); border-radius: 0.5rem; }
@media (min-width: 768px) { nav { display: flex; } }
</style>

