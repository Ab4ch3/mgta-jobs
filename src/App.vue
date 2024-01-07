<template>
  <div>
    <MainNav />
    <!-- //Este componente local nos permite usar las rutas -->
    <RouterView />
  </div>
</template>
<script setup>
import MainNav from '@/components/Navigation/MainNav.vue';
</script>

<style scoped></style>
