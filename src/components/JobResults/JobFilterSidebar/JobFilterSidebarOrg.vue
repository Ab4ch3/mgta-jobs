<template>
  <Accordion header="Organizations">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li v-for="org in store.uniqueOrganizations" :key="org" class="w-1/2 h-8">
            <input
              :id="org"
              v-model="selectedOrganizations"
              :value="org"
              type="checkbox"
              class="mr-3"
            />
            <label :for="org">{{ org }}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </Accordion>
</template>

<script setup>
import { useJobStore } from '@/stores/jobStore.js';
import Accordion from '@/components/Shared/AccordionComponent.vue';
import { ref } from 'vue';

const store = useJobStore();
let selectedOrganizations = ref([]);
</script>

<style lang="scss" scoped></style>
