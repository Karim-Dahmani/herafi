<!-- src/views/HomeView.vue -->
<template>
  <div>
    <!-- Hero -->
    <HeroBanner />

    <!-- Nos Services -->
    <section class="services-section">
      <div class="container">
        <h2 class="section-heading">Nos Services</h2>
        <p class="section-subtitle">
          Découvrez notre gamme complète de services professionnels pour
          l’entretien et la rénovation de votre domicile.
        </p>
        <div class="services-grid">
          <ServiceCard
            v-for="s in servicesWithIcon"
            :key="s.id"
            :title="s.name"
            :description="s.description"
            :icon="s.icon"
          />
        </div>
      </div>
    </section>

    <!-- Marketplace -->
    <section class="marketplace-section">
      <div class="container">
        <h2 class="section-heading">Notre Marketplace</h2>
        <p class="section-subtitle">
          Consultez les profils de nos artisans qualifiés.
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

        <!-- grille de pros -->
        <div class="pro-grid">
          <ProfessionalCard
  v-for="p in pagedProfessionals"
  :key="p.id"
  v-bind="p"
  @book="onBook"
  @contact="onContact"
/>

        </div>

        <!-- pagination -->
        <div class="pagination">
          <button
            v-for="page in totalPages"
            :key="page"
            :class="['page-btn', { active: page === currentPage }]"
            @click="goToPage(page)"
          >
            {{ page }}
          </button>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section class="contact-section" id="contact">
      <div class="container contact-container">
        <!-- LEFT -->
        <div class="contact-left">
          <div class="contact-header">
            <h2>Contactez-nous</h2>
            <p>Besoin d’informations ? Envoyez-nous un message.</p>
          </div>
          <div class="card form-card">
            <ContactForm :services="rawServices" @submit="onSubmit" />
          </div>
        </div>

        <!-- RIGHT -->
        <div class="contact-right">
          <div class="contact-header">
            <h2>Nos Coordonnées</h2>
          </div>
          <div class="card info-card">
            <ul>
              <li><strong>Adresse:</strong> 45 Boulevard Abdelmoumen, Casablanca, Maroc</li>
              <li><strong>Téléphone:</strong> +212 522 123 456</li>
              <li><strong>Horaires:</strong> Lun–Ven 8h30–18h30</li>
            </ul>
          </div>
          <div class="map-wrapper card">
            <MapEmbed />
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter }     from 'vue-router'

import HeroBanner        from '../components/HeroBanner.vue'
import ServiceCard       from '../components/ServiceCard.vue'
import ProfessionalCard  from '../components/ProfessionalCard.vue'
import ContactForm       from '../components/ContactForm.vue'
import MapEmbed          from '../components/MapEmbed.vue'
import Footer            from '../components/Footer.vue'

import rawServices       from '../data/services.json'
import prosData          from '../data/professionals.json'

// Services + icons
import CheckIcon         from '../components/CheckIcon.vue'
import BoltIcon          from '../components/BoltIcon.vue'
const serviceIcons     = [CheckIcon, BoltIcon, CheckIcon]
const servicesWithIcon = rawServices.map((s, i) => ({
  ...s,
  icon: serviceIcons[i % serviceIcons.length]
}))

import PhotoYoussef   from '../assets/image3.jpeg'
import PhotoHassan    from '../assets/image4.jpeg'
import PhotoKarim     from '../assets/image1.jpeg'
import PhotoAdil     from '../assets/image6.jpeg'
 import PhotoIssam      from '../assets/image11.png'
 import PhotoOmar      from '../assets/image9.jpeg'
 import PhotoTariq     from '../assets/image12.jpg'
 import PhotoMehdi     from '../assets/image13.jpg'
  import PhotoAmine     from '../assets/image14.png'
   import PhotoRachid     from '../assets/image10.jpeg'

const photos = [
  PhotoYoussef, PhotoHassan, PhotoKarim,
   PhotoAdil,
   PhotoIssam,PhotoOmar,PhotoTariq,PhotoMehdi,PhotoAmine,PhotoRachid
]

const professionals = prosData.map((p, i) => ({
  ...p,
  photo: photos[i]
}))

function onContact(id) {
  const el = document.getElementById('contact')
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}


// Filters & pagination
const categories     = [...new Set(professionals.map(p => p.category))]
const locations = [
  "Aïn Harrouda",
  "Berrechid",
  "Benslimane",
  "Casablanca Aïn Chock",
  "Casablanca Aïn Sebaâ",
  "Casablanca Al Fida",
  "Casablanca Anfa",
  "Casablanca Ben M’Sick",
  "Casablanca Hay Hassani",
  "Casablanca Hay Mohammadi",
  "Casablanca Maârif",
  "Casablanca Mers Sultan",
  "Casablanca Moulay Rachid",
  "Casablanca Roches Noires",
  "Casablanca Sbata",
  "Casablanca Sidi Belyout",
  "Casablanca Sidi Bernoussi",
  "Casablanca Sidi Moumen",
  "Casablanca Sidi Othmane",
  "El Jadida",
  "Médiouna",
  "Mohammedia",
  "Nouaceur",
  "Settat"
]
const availabilities = ['Disponible maintenant', 'Sur rendez-vous', 'Week-end']

const selectedCategory     = ref('')
const selectedLocation     = ref('')
const selectedAvailability = ref('')

function applyFilters() {
  currentPage.value = 1
}

const filteredProfessionals = computed(() =>
  professionals.filter(p =>
    (!selectedCategory.value || p.category === selectedCategory.value) &&
    (!selectedLocation.value || p.location === selectedLocation.value)
    // add availability logic if needed
  )
)

const currentPage = ref(1)
const perPage     = 6
const totalPages  = computed(() =>
  Math.ceil(filteredProfessionals.value.length / perPage)
)

function goToPage(page) {
  currentPage.value = page
}

const pagedProfessionals = computed(() => {
  const start = (currentPage.value - 1) * perPage
  return filteredProfessionals.value.slice(start, start + perPage)
})

// Router & form
const router = useRouter()
function onBook(id) {
  router.push(`/professionals/${id}`)
}
function onSubmit(data) {
  console.log('Contact data:', data)
  // send mail or call API
}
</script>

<style scoped>
/* Container */
.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* SERVICES */
.services-section {
  background: #fafafa;
  padding: 4rem 0;
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
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px,1fr));
  gap: 1.5rem;
}

/* MARKETPLACE */
.marketplace-section {
  background: #fff;
  padding: 4rem 0;
}
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
  border-radius: 6px;
  min-width: 180px;
}
.pro-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px,1fr));
  gap: 1.5rem;
}
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
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s;
}
.page-btn:hover {
  background: #f0f4f8;
}
.page-btn.active {
  background: #1d4ed8;
  color: #fff;
  border-color: #1d4ed8;
}

/* BUTTONS */
.btn {
  padding: 0.6em 1.2em;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
}
.btn-primary {
  background: #1d4ed8;
  color: #fff;
  border: none;
}

/* CONTACT */
.contact-section {
  background: #f4f6f8;
  padding: 4rem 0;
}
.contact-container {
  display: grid;
  grid-template-columns: 2.5fr 1fr;
  gap: 2rem;
}
@media (max-width: 640px) {
  .contact-container {
    grid-template-columns: 1fr;
  }
}
.contact-header h2 {
  font-size: 1.75rem;
  color: #1f2937;
  margin-bottom: 0.5rem;
}
.contact-header p {
  color: #4b5563;
  margin-bottom: 1rem;
  line-height: 1.5;
}
.card {
  background: #fff;
  padding: 1.5rem;
  border-radius: 6px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.08);
}
.info-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.info-card li {
  display: flex;
  align-items: baseline;
  margin-bottom: 0.75rem;
  color: #374151;
}
.info-card li::before {
  content: '•';
  color: #1d4ed8;
  margin-right: 0.5rem;
}

/* MAP */
.map-wrapper {
  margin-top: 1rem;
  padding: 0;
  overflow: hidden;
}
</style>
