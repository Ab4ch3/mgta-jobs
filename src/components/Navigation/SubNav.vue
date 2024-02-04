<template>
  <div class="w-full h-16 bg-white border-b border-solid border-x-brand-gray-1">
    <div class="flex items-center h-full px-8">
      <div v-if="onJobsResultsPage">
        <font-awesome-icon :icon="['fas', 'magnifying-glass']" class="mr-3" />
        <span>
          <span class="text-brand-green-1">{{ availableJobs }}</span> jobs matched
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useJobStore } from '@/stores/jobStore.js';
const store = useJobStore();
const route = useRoute();

const availableJobs = computed(() => {
  return store.jobsFilteredByOrganization.length;
});

const onJobsResultsPage = computed(() => {
  return route.name === 'JobResults';
});
</script>

<style scoped></style>
