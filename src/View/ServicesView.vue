<template>
  <section class="services-section">
    <div class="container">
      <h2 class="section-heading">Nos Services</h2>
      <p class="section-subtitle">
        Découvrez notre gamme complète de services professionnels pour
        l’entretien et la rénovation de votre domicile.
      </p>

      <div class="services-grid">
        <ServiceCard
          v-for="s in services"
          :key="s.id"
          :title="s.name"
          :description="s.description"
          :icon="s.icon"
        />
      </div>

      <!-- ↙ Ajout de l’aperçu Marketplace -->
      <div class="marketplace-preview">
        <h3 class="preview-heading">Rencontrez nos artisans</h3>
        <div class="pro-grid">
          <ProfessionalCard
            v-for="p in professionalsPreview"
            :key="p.id"
            v-bind="p"
            @book="onBook"
          />
        </div>
        <router-link to="/marketplace" class="btn btn-outline preview-btn">
          Voir tous nos artisans
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
// données services
import servicesData  from '../data/services.json'
import ServiceCard   from '../components/ServiceCard.vue'
import CheckIcon     from '../components/CheckIcon.vue'
import BoltIcon      from '../components/BoltIcon.vue'

const icons    = [ CheckIcon, BoltIcon, CheckIcon ]
const services = servicesData.map((s,i)=>({
  ...s, icon: icons[i % icons.length]
}))

// aperçu marketplace : 3 premiers pros
import prosData          from '../data/professionals.json'
import ProfessionalCard  from '../components/ProfessionalCard.vue'
import PhotoSophie       from '../assets/karim.png'
import PhotoMoussa       from '../assets/sofia.png'
import PhotoAlice        from '../assets/youssef.png'

const photos = [ PhotoSophie, PhotoMoussa, PhotoAlice ]
const professionals = prosData.map((p,i)=>({
  ...p,
  photo: photos[i % photos.length]
}))

// ne garder que 3 pour l’aperçu
const professionalsPreview = professionals.slice(0,3)

// navigation “Réserver”
import { useRouter } from 'vue-router'
const router = useRouter()
function onBook(id) {
  router.push(`/professionals/${id}`)
}
</script>

<style scoped>
.services-section {
  background: #fafafa;
  padding: 4rem 0;
}
.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1rem;
}
.section-heading {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 0.5rem;
}
.section-subtitle {
  text-align: center;
  color: #555;
  margin-bottom: 2rem;
}

/* Grille de services */
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px,1fr));
  gap: 1.5rem;
}

/* Aperçu Marketplace */
.marketplace-preview {
  margin-top: 3rem;
  text-align: center;
}
.preview-heading {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
}
.pro-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px,1fr));
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}
.preview-btn {
  display: inline-block;
  margin-top: 0.5rem;
}

/* Boutons */
.btn {
  padding: 0.6em 1.2em;
  border-radius: 6px;
  font-weight: 600;
  transition: background-color 0.2s;
  cursor: pointer;
}
.btn-outline {
  background: transparent;
  border: 2px solid #1d4ed8;
  color: #1d4ed8;
}
.btn-outline:hover {
  background: #1d4ed8;
  color: white;
}
</style>
