<template>
  <div class="w-full h-16 bg-white border-b border-solid border-x-brand-gray-1">
    <div class="flex items-center h-full px-8">
      <div v-if="onJobsResultsPage">
        <font-awesome-icon :icon="['fas', 'magnifying-glass']" class="mr-3" />
        <span> <span class="text-brand-green-1">1653</span> jobs matched </span>
      </div>
    </div>
  </div>
</template>

<script setup>
let onJobsResultsPage = true;
</script>

<style scoped></style>
