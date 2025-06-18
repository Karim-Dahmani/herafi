<template>
  <nav :class="['navbar', { expanded }]">
    <!-- Web Version & Mobile Version handled responsively -->
    <div class="container">
      <!-- Logo -->
      <router-link to="/" class="logo">
        <img :src="Logo" alt="HERAFI Logo" class="logo-img" />
      </router-link>
      <!-- Mobile Menu Toggle -->
      <button class="menu-toggle" @click="expanded = !expanded" aria-label="Toggle navigation">
        ☰
      </button>
      <!-- Navigation Links: visible on Web; toggled on Mobile -->
      <div class="nav-links">
        <router-link to="/herafi" @click.native="expanded = false">Accueil</router-link>
        <router-link to="/services" @click.native="expanded = false">Nos Services</router-link>
        <router-link to="/marketplace" @click.native="expanded = false">Marketplace</router-link>
        <router-link to="/contact" @click.native="expanded = false">Contact</router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import Logo from '../assets/logo.jpeg'

const expanded = ref(false)
</script>

<style scoped>
/* --------------------------------------------- */
/* Web Version Styles (Desktop: ≥769px)           */
/* --------------------------------------------- */
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
.logo {
  display: flex;
  align-items: center;
}
.logo-img {
  height: 40px;
  width: auto;
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
/* Hide mobile toggle on desktop */
.menu-toggle {
  display: none;
}

/* --------------------------------------------- */
/* Mobile Version Styles (≤768px)                */
/* --------------------------------------------- */
@media (max-width: 768px) {
  /* Show burger icon */
  .menu-toggle {
    display: block;
    background: none;
    border: none;
    font-size: 1.8rem;
    cursor: pointer;
    color: var(--color-text-dark);
  }
  /* Hide nav-links by default */
  .nav-links {
    display: none;
  }
  /* Expanded state: show nav-links vertically */
  .navbar.expanded .nav-links {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 64px;
    left: 0;
    right: 0;
    background: rgba(255,255,255,0.95);
    border-bottom: 1px solid #e5e7eb;
    padding: 1rem 0;
  }
  .navbar.expanded .nav-links a {
    padding: 0.75rem 1rem;
    border-top: 1px solid #e5e7eb;
  }
  .navbar.expanded .nav-links a:first-child {
    border-top: none;
  }
}
</style>
