<template>
  <header class="w-full text-sm">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-brand-gray-1">
        <a :href="url" class="flex items-center h-full text-xl">{{ companyName }}</a>
        <nav class="h-full ml-12">
          <ul class="flex h-full p-0 m-0 list-none">
            <li v-for="menuItem in menuItems" :key="menuItem" class="h-full ml-9 first:ml-0">
              <a href="#" class="flex items-center h-full py-2.5">{{ menuItem }}</a>
            </li>
          </ul>
        </nav>
        <div class="flex items-center h-full ml-auto py-2.5">
          <profileImage v-if="isLoggedIn" />
          <ActionButton v-else @click="loginUser" />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import ActionButton from '@/components/ActionButton.vue';
import profileImage from '@/components/ProfileImage.vue';
import { ref } from 'vue';

let companyName = 'Mgta Jobs';
let url = 'https://www.google.com/about/careers/applications/';
let menuItems = ['Teams', 'Locations', 'Life at mgta Job', 'How we hire', 'Students', 'Jobs'];
let isLoggedIn = ref(false);

// ### METHODS
const loginUser = () => {
  isLoggedIn.value = true;
};
</script>

<style scoped></style>
