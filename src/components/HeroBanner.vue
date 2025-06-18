<template>
  <section class="hero">
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <div class="subtitle">Service à domicile professionnel</div>
      <h1>Trouvez un artisan qualifié en quelques clics</h1>
      <p style="color: aliceblue;">
        Simplifiez vos projets de rénovation et d’entretien avec nos artisans 
        certifiés. Service rapide, travail garanti et satisfaction assurée.
      </p>
      <div class="cta-group">
        <router-link to="/contact" class="btn btn-outline">
Devis gratuit en ligne        </router-link>
      </div>
      <div class="stats">
        <div class="stat">
          <div class="number">1000+</div>
          Artisans certifiés
        </div>
        <div class="stat">
          <div class="number">24/7</div>
          Service disponible
        </div>
        <div class="stat">
          <div class="number">4.8/5</div>
          Note moyenne
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import heroImg from '../assets/hero.png'
</script>

<style scoped>
.hero {
  position: relative;
  height: calc(100vh - 64px);             /* account for your navbar height */
  background: url('../assets/hero.png') center/cover no-repeat;
  display: flex;
  align-items: center;                     /* vertical centering */
}
.hero-overlay {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.3);
}
.hero-content {
  position: relative;
  z-index: 1;                               /* above overlay */
  max-width: 700px;
  padding: 2rem;
  color: var(--color-secondary);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.subtitle {
  display: inline-block;
  background: rgba(255,255,255,0.2);
  padding: 0.2em 0.5em;
  border-radius: var(--radius);
  font-size: 0.9rem;
  color: var(--color-secondary);
}
h1 {
  font-size: 2.5rem;
  line-height: 1.2;
  margin: 0;
}
p {
  color: var(--color-text-light);
  margin: 0;
}
.cta-group {
  display: flex;
  gap: 1rem;
}
.stats {
  display: flex;
  gap: 2rem;
  margin-top: 1rem;
}
.stat {
  text-align: center;
}
.number {
  font-size: 1.6rem;
  font-weight: bold;
}
/* 6) Hero */
.hero {
  position: relative;
  height: calc(100vh - 64px);
  background: url('../assets/hero.png') center/cover no-repeat;
}
.hero::after {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.3);
}
.hero-content {
  position: relative;
  max-width: 700px;
  color: var(--color-secondary);
  padding: 2rem;
}
.hero-content .subtitle {
  background: rgba(255,255,255,0.2);
  display: inline-block;
  padding: 0.2em 0.5em;
  border-radius: var(--radius);
  font-size: 0.9rem;
  margin-bottom: 1rem;
}
.hero-content h1 {
  font-size: 2.5rem;
  line-height: 1.2;
  margin-bottom: 1rem;
}
.hero-content p {
  margin-bottom: 1.5rem;
  color: var(--color-text-light);
}
.hero-content .cta-group {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
}
.hero-content .stats {
  display: flex;
  gap: 2rem;
}
.hero-content .stat {
  text-align: center;
}
.hero-content .stat .number {
  font-size: 1.6rem;
  font-weight: bold;
}
</style>
