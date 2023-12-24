<template>
  <main>
    <section class="flex flex-col h-screen pt-10 pb-20 bg-yellow-200">
      <div class="grid grid-cols-12">
        <div class="grid-start-1 col-span-1 border border-blue-700">1 column</div>
        <div class="grid-start-7 col-span-5 border border-blue-700">
          <HeadLine />
        </div>
        <div class="grid-start-2 col-span-5 border border-blue-700">5 column</div>
        <div class="grid-start-11 col-span-1 border border-blue-700">1 columns</div>
      </div>
    </section>
  </main>
</template>

<script setup>
import HeadLine from '@/components/HeadLine.vue';
</script>

<style scoped></style>
``
