<template>
  <!-- Es la manera de representar computed property en clases -->
  <header :class="['w-full', 'text-sm', headerHeightClass]">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-brand-gray-1">
        <RouterLink to="/" class="flex items-center h-full text-xl"> Mgta Jobs </RouterLink>
        <nav class="h-full ml-12">
          <ul class="flex h-full p-0 m-0 list-none">
            <li v-for="Item in menuItems" :key="Item" class="h-full ml-9 first:ml-0">
              <RouterLink :to="Item.url" class="flex items-center h-full py-2.5">{{
                Item.text
              }}</RouterLink>
            </li>
          </ul>
        </nav>
        <div class="flex items-center h-full ml-auto py-2.5">
          <ProfileImage v-if="isLoggedIn" />
          <ActionButton v-else text="Sign In" type="primary" @click="loginUser" />
        </div>
      </div>
      <Subnav v-if="isLoggedIn" />
    </div>
  </header>
</template>

<script setup>
import ActionButton from '@/components/Shared/ActionButton.vue';
import ProfileImage from '@/components/Navigation/ProfileImage.vue';
import Subnav from '@/components/Navigation/SubNav.vue';
import { computed, ref } from 'vue';
import { RouterLink } from 'vue-router';

let menuItems = [
  { text: 'Teams', url: '/' },
  { text: 'Locations', url: '/' },
  { text: 'Life at mgta job', url: '/' },
  { text: 'How we hire', url: '/' },
  { text: 'Students', url: '/' },
  { text: 'Jobs', url: '/jobs/results' }
];
let isLoggedIn = ref(false);

// ### METHODS
const loginUser = () => {
  isLoggedIn.value = true;
};

// ## COMPUTED PROPERTY
const headerHeightClass = computed(() => {
  return {
    'h-16': !isLoggedIn.value,
    'h-32': isLoggedIn.value
  };
});
</script>

<style scoped></style>
