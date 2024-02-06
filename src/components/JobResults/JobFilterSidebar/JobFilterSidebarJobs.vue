<template>
  <Accordion header="Job Types">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li v-for="job in store.uniqueJobsTypes" :key="job" class="w-1/2 h-8">
            <input
              :id="job"
              v-model="jobsType"
              :value="job"
              type="checkbox"
              class="mr-3"
              @change="selectedJobs"
            />
            <label :for="job">{{ job }}</label>
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
let jobsType = ref([]);

const selectedJobs = () => {
  store.addJobsTypes(jobsType.value);
};
</script>

<style lang="scss" scoped></style>
