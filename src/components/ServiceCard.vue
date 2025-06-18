<template>
  <div class="card">
    <div class="card-icon">
      <component :is="icon" />
    </div>
    <div class="card-title">{{ title }}</div>
    <div class="card-desc">{{ description }}</div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  icon: { type: [Object, Function], required: true }
})
</script>

<style scoped>

.card {
  background: var(--color-secondary);
  border-radius: var(--radius);
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
  padding: 1.5rem;
  transition: transform var(--transition), box-shadow var(--transition);
}
.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}
.card .card-icon {
  width: 2rem; height: 2rem;
  margin-bottom: 0.8rem;
  color: var(--color-primary);
}
.card .card-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}
.card .card-desc {
  font-size: 0.95rem;
  color: var(--color-text-light);
}
</style>
