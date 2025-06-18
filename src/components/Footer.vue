<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-col">
        <h3>HERAFI</h3>
        <p>Solutions innovantes pour artisans et professionnels. Notre mission est de vous connecter avec les meilleurs talents.</p>
      </div>
      <div class="footer-col">
        <h3>Liens rapides</h3>
        <ul>
          <li><router-link to="/">Accueil</router-link></li>
          <li><router-link to="/services">Nos Services</router-link></li>
          <li><router-link to="/marketplace">Marketplace</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </div>
      <div class="footer-col">
        <h3>Contact</h3>
        <ul class="contact-list">
          <li>123 Boulevard Ex</li>
          <li>Casablanca, Maroc</li>
          <li>+212 522 123 456</li>
          <li><a href="mailto:info@herafi.com">info@herafi.com</a></li>
        </ul>
        <div class="social-links">
          <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
          <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
          <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; {{ new Date().getFullYear() }} HERAFI. Tous droits réservés.</p>
    </div>
  </footer>
</template>

<script setup>
// Aucun script nécessaire pour ce composant statique
</script>

<style scoped>
.footer {
  background: var(--color-primary);
  color: var(--color-secondary);
  padding-top: 3rem;
}
.footer .container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}
.footer-col h3 {
  font-size: 1.25rem;
  margin-bottom: 1rem;
}
.footer-col p,
.footer-col ul,
.footer-col a {
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--color-secondary);
}
.footer-col ul {
  list-style: none;
  padding: 0;
}
.footer-col ul li {
  margin-bottom: 0.5rem;
}
.footer-col ul li a:hover {
  text-decoration: underline;
}
.contact-list li {
  display: flex;
  align-items: center;
}
.social-links {
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
}
.social-links a {
  font-size: 1.2rem;
  color: var(--color-secondary);
  transition: color var(--transition);
}
.social-links a:hover {
  color: var(--color-bg-light);
}
.footer-bottom {
  text-align: center;
  padding: 1.5rem 1rem;
  background: rgba(0, 0, 0, 0.1);
  margin-top: 2rem;
}
.footer-bottom p {
  margin: 0;
  font-size: 0.85rem;
  color: var(--color-secondary);
}

/* Responsive mobile footer */
@media (max-width: 640px) {
  .footer .container {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .social-links {
    justify-content: center;
  }
}
</style>
