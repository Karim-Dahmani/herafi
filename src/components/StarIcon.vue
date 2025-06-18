<template>
  <svg :class="{'filled': filled}" viewBox="0 0 20 20" fill="currentColor" class="star-icon">
    <path d="M9.049 2.927C9.349 2.006 10.651 2.006 10.951 2.927l1.7 5.216a1 1 0 00.95.69h5.487c.969..."/>
  </svg>
</template>
<script>
export default { name: 'StarIcon', props: { filled: Boolean } };
</script>
<style scoped>
.star-icon { width: 20px; height: 20px; color: var(--yellow-400); opacity: 0.5; }
.star-icon.filled { opacity: 1; }
</style>
