<template>
  <main class="flex-auto p-8 bg-brand-gray-2">
    <ol>
      <JobListing v-for="job in jobs" :key="job.id" :job="job" />
    </ol>
  </main>
</template>

<script setup>
import axios from 'axios';
import JobListing from '@/components/JobResults/JobListing.vue';
import { onMounted, ref } from 'vue';

let jobs = ref([]);

onMounted(async () => {
  let response = await axios.get('http://localhost:3000/jobs');
  jobs.value = response.data;
});
</script>

<style scoped></style>
