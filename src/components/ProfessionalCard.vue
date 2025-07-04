<template>
  <div class="professional-card">
    <img :src="photo" :alt="name" />
    <div class="info">
      <h3>{{ name }}</h3>
      <div class="sub">{{ subText }}</div>
      <div class="sub">
        <span
          v-for="n in 5"
          :key="n"
          :style="{ color: n <= Math.round(rating) ? '#facc15' : '#e5e7eb' }"
        >
          ★
        </span>
        ({{ reviews }})
      </div>
    </div>
    <div class="actions">
      <button class="btn btn-outline" @click="$emit('contact', id)">Contacter</button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  id: Number,
  name: String,
  rating: Number,
  reviews: Number,
  photo: String,
  category: String,
  location: String
})

const subText = computed(() => {
  const parts = []
  if (props.category) parts.push(props.category)
  if (props.location) parts.push(props.location)
  return parts.join(' · ')
})
</script>

<style scoped>
.professional-card {
  background: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.professional-card img {
  width: 100%;
  max-width: 180px;
  border-radius: 6px;
  object-fit: cover;
}
.info {
  margin-top: 1rem;
}
.info h3 {
  font-size: 1.1rem;
  margin-bottom: 0.25rem;
}
.sub {
  font-size: 0.9rem;
  color: #555;
}
.actions {
  margin-top: 1rem;
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
