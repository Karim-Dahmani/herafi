<!-- src/components/Footer.vue -->
<template>
  <footer class="footer">
    <div class="container footer-grid">
      <div class="footer-col">
        <h3>À propos</h3>
        <p>
          HERAFI met en relation des particuliers avec des artisans qualifiés
          pour tous types de travaux.
        </p>
      </div>

      <div class="footer-col">
        <h3>Liens utiles</h3>
        <ul>
          <li><router-link to="/">Accueil</router-link></li>
          <li><router-link to="/services">Nos Services</router-link></li>
          <li><router-link to="/marketplace">Marketplace</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </div>

      <div class="footer-col">
        <h3>Contact</h3>
        <ul>
          <li>+212 522 123 456</li>
          <li>contact@herafi.ma</li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      © {{ new Date().getFullYear() }} HERAFI. Tous droits réservés.
    </div>
  </footer>
</template>

<script setup>
// aucun JS nécessaire
</script>
