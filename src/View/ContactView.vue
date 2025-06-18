<template>
  <section class="py-16 bg-gray-50">
    <div class="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">
      <div>
        <h2 class="text-3xl font-bold mb-4">Envoyez-nous un message</h2>
        <ContactForm :services="services" @submit="onSubmit"/>
      </div>
      <div class="space-y-6">
        <div class="bg-white p-6 rounded shadow">
          <h2 class="text-2xl font-bold mb-2">Informations de contact</h2>
          <ul class="space-y-2">
            <li><strong>Adresse:</strong> 123 Boulevard …</li>
            <li><strong>Téléphone:</strong> +212 522 123 456</li>
            <li><strong>Horaires:</strong> Lun–Ven 8h30–18h30</li>
          </ul>
        </div>
        <MapEmbed />
      </div>
    </div>
  </section>
</template>

<script setup>
import ContactForm from '../components/ContactForm.vue'
import MapEmbed    from '../components/MapEmbed.vue'
import services    from '../data/services.json'

function onSubmit(data) {
  console.log('Contact data:', data)
  // mailto: or POST…
}
</script>
<style>
/* Wrapper général */
.contact-section {
  padding: 4rem 0;
  background-color: #F9FAFB;
}

/* Grille 2 colonnes */
.contact-section .grid {
  max-width: 72rem;
  margin: 0 auto;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}
@media (min-width: 768px) {
  .contact-section .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Titres */
.contact-section h2 {
  color: #111827;
  font-weight: 700;
  margin-bottom: 1rem;
}
.contact-section h2.text-2xl {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}
.contact-section h2.text-3xl {
  font-size: 1.875rem;
}

/* Carte d'infos */
.contact-section .info-card {
  background-color: #FFFFFF;
  padding: 1.5rem;
  border-radius: 0.75rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
.contact-section .info-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.contact-section .info-card li strong {
  color: #374151;
}

/* Encadré de la carte Google Maps */
.map-embed {
  width: 100%;
  height: 300px;
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

</style>