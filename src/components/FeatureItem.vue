<template>
  <div class="feature-item">
    <component :is="icon" class="icon" />
    <h3>{{ title }}</h3>
  </div>
</template>
<script>
export default {
  name: 'FeatureItem',
  props: { title: String, icon: Object }
};
</script>
<style scoped>
.feature-item { display: flex; flex-direction: column; align-items: center; gap: 1rem; }
.icon { width: 48px; height: 48px; color: var(--blue-600); }
h3 { font-size: 1.25rem; font-weight: 600; color: var(--blue-900); }
</style>