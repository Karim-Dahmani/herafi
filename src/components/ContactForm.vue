<template>
  <form class="contact-form" @submit.prevent="submit">
    <label>Nom<input v-model="form.name" type="text" required /></label>
    <label>Email<input v-model="form.email" type="email" required /></label>
    <label>Téléphone<input v-model="form.phone" type="tel" required /></label>
    <label>Service souhaité
      <select v-model="form.service">
        <option v-for="s in services" :key="s.id" :value="s.name">{{ s.name }}</option>
      </select>
    </label>
    <label>Message<textarea v-model="form.message" rows="4" required /></label>
    <button type="submit">Envoyer</button>
  </form>
</template>
<script>
export default {
  name: 'ContactForm',
  props: { services: Array },
  data() { return { form: { name: '', email: '', phone: '', service: '', message: '' } }; },
  methods: {
    submit() { this.$emit('submit', { ...this.form }); }
  }
};
</script>
<style scoped>
.contact-form {
  max-width: 32rem;
  margin: 2rem auto;
  background-color: #ffffff;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.contact-form label {
  display: block;
  font-weight: 500;
  color: #374151;
}

.contact-form input,
.contact-form select,
.contact-form textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.75rem;
  font-size: 1rem;
  color: #111827;
  transition: box-shadow 0.2s ease;
}

.contact-form input:focus,
.contact-form select:focus,
.contact-form textarea:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
}

.contact-form textarea {
  resize: none;
}

.contact-form button {
  width: 100%;
  background-color: #2563eb;
  color: #ffffff;
  font-weight: 600;
  padding: 0.75rem;
  border: none;
  border-radius: 0.75rem;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.2s ease;
}

.contact-form button:hover {
  background-color: #1d4ed8;
}

</style>
