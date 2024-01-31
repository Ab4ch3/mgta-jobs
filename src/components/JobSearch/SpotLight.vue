<template>
  <ul>
    <li v-for="spotlight in spotlights" :key="spotlight.id">
      <slot :spotlight="spotlight"></slot>
    </li>
  </ul>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';

let spotlights = ref([]);

onMounted(async () => {
  const baseURL = import.meta.env.VITE_APP_API_URL;
  const url = `${baseURL}/spotlights`;

  const response = await axios.get(url);
  spotlights.value = response.data;
});
</script>

<style scoped></style>
