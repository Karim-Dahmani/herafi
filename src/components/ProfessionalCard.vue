<template>
  <div class="professional-card">
    <img :src="photo" :alt="name" />
    <div class="info">
      <h3>{{ name }}</h3>
      <div class="sub">{{ subText }}</div>
      <div class="sub">
        <span v-for="n in 5" :key="n">★</span>
        ({{ reviews }})
      </div>
    </div>
    <div class="actions">
      <button class="btn btn-primary" @click="$emit('book', id)">
        Réserver
      </button>
      <button class="btn btn-outline" @click="$emit('contact', id)">
        Contacter
      </button>
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
  let parts = []
  if (props.category) parts.push(props.category)
  if (props.location) parts.push(props.location)
  return parts.join(' · ')
})
</script>

<style scoped>
/* uses .professional-card, .info, .actions, .btn from style.css */
</style>
