<template>
  <div class="flex flex-row flex-nowrap w-full">
    <JobFilter />
    <JobListings />
  </div>
</template>

<script setup>
import JobFilter from '@/components/JobResults/JobFilterSidebar/JobFilterSidebar.vue';
import JobListings from '@/components/JobResults/JobListings.vue';
</script>

<style lang="scss" scoped></style>
