<template>
  <main class="flex-auto p-8 bg-brand-gray-2">
    <ol>
      <JobListing v-for="job in displayJobs" :key="job.id" :job="job" />
    </ol>
    <div class="mt-8 mx-auto">
      <div class="flex flex-row flex-nowrap">
        <p class="text-sm flex-grow">Page {{ currentPage }}</p>
        <div class="flex items-center justify-center">
          <router-link
            v-if="previousPages"
            :to="{ name: 'JobResults', query: { page: previousPages } }"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
            >Previous</router-link
          >

          <router-link
            v-if="nextPage"
            :to="{ name: 'JobResults', query: { page: nextPage } }"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
            >Next</router-link
          >
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import axios from 'axios';
import JobListing from '@/components/JobResults/JobListing.vue';
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
let jobs = ref([]);

const currentPage = computed(() => {
  const pageString = route.query.page || '1';
  return Number.parseInt(pageString);
});

const previousPages = computed(() => {
  const previousPages = currentPage.value - 1;
  const firstPage = 1;
  return previousPages >= firstPage ? previousPages : undefined;
});

const nextPage = computed(() => {
  const nextPage = currentPage.value + 1;
  const maxPage = Math.ceil(jobs.value.length / 10);
  return nextPage <= maxPage ? nextPage : undefined;
});

const displayJobs = computed(() => {
  let pageNumber = currentPage.value;
  const firstJobIndex = (pageNumber - 1) * 10;
  const lastJobIndex = pageNumber * 10;
  return jobs.value.slice(firstJobIndex, lastJobIndex);
});

onMounted(async () => {
  const baseURL = import.meta.env.VITE_APP_API_URL;
  let response = await axios.get(`${baseURL}/jobs`);
  console.log(baseURL);
  jobs.value = response.data;
});
</script>

<style scoped></style>
