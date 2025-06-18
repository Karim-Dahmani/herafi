<!-- src/views/MarketplaceView.vue -->
<template>
  <section class="marketplace-section">
    <div class="container">
      <h2 class="section-heading">Notre Marketplace</h2>
      <p class="section-subtitle">
        Consultez les profils de nos artisans qualifiés et réservez directement.
      </p>

      <!-- filtres -->
      <div class="filters">
        <div class="filter-item">
          <label>Catégorie</label>
          <select v-model="selectedCategory">
            <option value="">Toutes les catégories</option>
            <option v-for="c in categories" :key="c" :value="c">{{ c }}</option>
          </select>
        </div>
        <div class="filter-item">
          <label>Localisation</label>
          <select v-model="selectedLocation">
            <option value="">Toutes les zones</option>
            <option v-for="l in locations" :key="l" :value="l">{{ l }}</option>
          </select>
        </div>
        <div class="filter-item">
          <label>Disponibilité</label>
          <select v-model="selectedAvailability">
            <option value="">Toutes les disponibilités</option>
            <option v-for="a in availabilities" :key="a" :value="a">{{ a }}</option>
          </select>
        </div>
        <button class="btn btn-primary" @click="applyFilters">
          Rechercher
        </button>
      </div>

      <!-- grille de cartes -->
      <div class="pro-grid">
        <ProfessionalCard
          v-for="p in filteredProfessionals"
          :key="p.id"
          v-bind="p"
          @book="onBook"
        />
      </div>

      <!-- pagination -->
      <div class="pagination">
        <button
          v-for="page in totalPages"
          :key="page"
          :class="['page-btn', { active: page === currentPage }]"
          @click="goToPage(page)"
        >{{ page }}</button>
      </div>
    </div>
  </section>
     <!-- Footer -->
    <Footer />
</template>

<script setup>
import { ref, computed }     from 'vue'
import { useRouter }         from 'vue-router'
import ProfessionalCard      from '../components/ProfessionalCard.vue'
import prosData              from '../data/professionals.json'
// Professionals + photos
import PhotoYoussef   from '../assets/youssef.png'
import PhotoHassan    from '../assets/hassan.png'
import PhotoKarim     from '../assets/karim.png'
import PhotoNadia     from '../assets/nadia.png'
 import PhotoAdil      from '../assets/adil.png'
 import PhotoSara      from '../assets/sara.png'
 import PhotoIssam     from '../assets/issam.png'
 import PhotoSofia     from '../assets/sofia.png'
import Footer            from '../components/Footer.vue'

// préparer les données
const photos = [
  PhotoYoussef, PhotoHassan, PhotoKarim,
  PhotoNadia, PhotoAdil,
  PhotoSara, PhotoIssam,
  PhotoSofia
]
const professionals = prosData.map((p,i)=>({
  ...p,
  photo: photos[i % photos.length]
}))

// filtres
const categories     = [...new Set(professionals.map(p=>p.category))]
const locations      = [...new Set(professionals.map(p=>p.location))]
const availabilities = ['Disponible maintenant', 'Sur rendez-vous', 'Week-end']

const selectedCategory     = ref('')
const selectedLocation     = ref('')
const selectedAvailability = ref('')

// pagination
const currentPage = ref(1)
const perPage     = 6
const totalPages  = Math.ceil(professionals.length / perPage)

function applyFilters() {
  currentPage.value = 1
}

function goToPage(page) {
  currentPage.value = page
}

// données filtrées et paginées
const filtered = computed(() => professionals.filter(p => {
  return (!selectedCategory.value || p.category === selectedCategory.value)
      && (!selectedLocation.value || p.location === selectedLocation.value)
  // ignore l’availability pour l’exemple — ajouter selon votre logique
}))

const filteredProfessionals = computed(() => {
  const start = (currentPage.value - 1) * perPage
  return filtered.value.slice(start, start + perPage)
})

// navigation “Réserver”
const router = useRouter()
function onBook(id) {
  router.push(`/professionals/${id}`)
}
</script>

<style scoped>
.marketplace-section {
  padding: 4rem 0;
  background: #fafafa;
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

/* Filtres */
.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 2rem;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 2rem;
}
.filter-item {
  display: flex;
  flex-direction: column;
}
.filter-item label {
  font-weight: 500;
  margin-bottom: 0.25rem;
  color: #374151;
}
.filter-item select {
  padding: 0.5rem;
  border: 1px solid #CBD5E1;
  border-radius: var(--radius);
  min-width: 180px;
}

/* Grille de pros */
.pro-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px,1fr));
  gap: 1.5rem;
}

/* Pagination */
.pagination {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
}
.page-btn {
  padding: 0.5rem 1rem;
  border: 1px solid #CBD5E1;
  background: #fff;
  border-radius: var(--radius);
  cursor: pointer;
  transition: background-color 0.2s;
}
.page-btn:hover {
  background: #f0f4f8;
}
.page-btn.active {
  background: var(--color-primary);
  color: #fff;
  border-color: var(--color-primary);
}

/* Boutons */
.btn {
  padding: 0.6em 1.2em;
  border-radius: var(--radius);
  font-weight: 600;
  transition: background-color 0.2s;
  cursor: pointer;
}
.btn-primary {
  background: var(--color-primary);
  color: #fff;
  border: none;
}
.btn-primary:hover {
  background: var(--color-primary-light);
}
</style>
