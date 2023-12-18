<template>
  <button :class="props.type">
    {{ props.text }}
  </button>
</template>

<script setup>
const props = defineProps({
  text: { type: String, required: true, default: '' },
  type: {
    type: String,
    required: true,
    default: 'primary',
    validator(value) {
      return ['primary', 'secondary'].includes(value);
    }
  }
});
</script>

<style scoped>
button {
  @apply px-5 py-3 rounded font-medium;
}

.primary {
  /* @apply es una directiva de tailwind que nos permite
    escribir codigo de tailwind en vez de css puro.
  */
  @apply text-white bg-brand-blue-1 hover:shadow-blue;
}
.secondary {
  @apply text-brand-blue-1 bg-transparent hover:bg-brand-blue-2 hover:text-white;
}
</style>
