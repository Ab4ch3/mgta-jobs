<template>
  <main>
    <section class="flex flex-col h-screen pt-10 pb-20">
      <div class="grid grid-cols-12">
        <div class="grid-start-1 col-span-1"></div>
        <div class="grid-start-7 col-span-5">
          <HeadLine />
          <JobSearch />
        </div>
        <div class="grid-start-2 col-span-5"></div>
        <div class="grid-start-11 col-span-1"></div>
      </div>
    </section>
  </main>
</template>

<script setup>
import HeadLine from '@/components/HeadLine.vue';
import JobSearch from '@/components/JobSearchForm.vue';
</script>

<style scoped></style>
``
