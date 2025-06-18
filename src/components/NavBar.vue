<template>
  <nav class="navbar">
    <div class="container">
      <div class="logo">HERAFI</div>
      <div class="nav-links">
        <router-link to="/">Accueil</router-link>
        <router-link to="/services">Nos Services</router-link>
        <router-link to="/marketplace">Marketplace</router-link>
        <router-link to="/contact">Contact</router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
// no additional logic needed
</script>

<style scoped>
/* 5) Navbar */
.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  background: rgba(255,255,255,0.9);
  backdrop-filter: blur(8px);
  z-index: 10;
  border-bottom: 1px solid #e5e7eb;
}
.navbar .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
}
.navbar .logo {
  font-size: 1.4rem;
  font-weight: bold;
  color: var(--color-primary);
}
.nav-links {
  display: flex;
  gap: 1.5rem;
}
.nav-links a {
  font-weight: 500;
  color: var(--color-text-dark);
  transition: color var(--transition);
}
.nav-links a:hover {
  color: var(--color-primary);
}
</style>
