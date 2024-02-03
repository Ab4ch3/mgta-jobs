<template>
  <form
    class="flex items-center w-full h-12 mt-14 border border-solid border-brand-gray-3 rounded-3xl"
    @submit.prevent="SearchForJob"
  >
    <FontAwesomeIcon :icon="['fas', 'search']" class="ml-4 mr-3" />

    <div class="flex flex-nowrap flex-1 h-full text-base font-light">
      <div class="relative flex items-center flex-1 h-full pr-3">
        <label for="role" class="absolute left-0 -top-10 font-medium">Role</label>
        <TextInput placeholder="Software Enginner" :value="role" @handle-input="updateRole" />
      </div>

      <span class="flex items-center h-full px-3 border-l border-brand-gray-3 bg-brand-gray-2"
        >in</span
      >

      <div class="relative flex items-center flex-1 h-full pl-3">
        <label for="role" class="absolute left-0 -top-10">Where?</label>
        <TextInput placeholder="Los Angeles" :value="location" @handle-input="updateLocation" />
      </div>
    </div>
    <ActionButton text="Search" type="secondary" class="rounded-r-3xl" />
  </form>
</template>

<script setup>
import ActionButton from '@/components/Shared/ActionButton.vue';
import TextInput from '@/components/Shared/TextInput.vue';

import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
let role = ref('');
let location = ref('');

const updateRole = (payload) => {
  role.value = payload;
};
const updateLocation = (payload) => {
  location.value = payload;
};

const SearchForJob = () => {
  router.push({
    name: 'JobResults',
    query: {
      role: role.value,
      location: location.value
    }
  });
};
</script>

<style scoped></style>
