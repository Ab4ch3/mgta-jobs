<template>
  <li class="mb-7">
    <RouterLink
      :to="jobPageLink"
      class="block mx-auto bg-white broder border-solid border-brand-gray-2 rounded hover:shadow-gray"
    >
      <div class="pt-5 pb-2 mx-8 border-b border-solid border-brand-gray-2">
        <h2 class="mb-2 text-2xl">{{ props.job.title }}</h2>

        <div class="flex flex-row align-middle">
          <div class="mr-5">
            <span>{{ props.job.organization }}</span>
          </div>

          <div class="">
            <ul>
              <li v-for="location in props.job.locations" :key="location" class="inline-block mr-5">
                {{ location }}
              </li>
            </ul>
          </div>
        </div>

        <div class="px-8 py-4">
          <div>
            <h3 class="mt-1 mb-2">Qualification:</h3>
            <div>
              <ul class="pl-8 list-disc">
                <li v-for="qualification in props.job.minimumQualifications" :key="qualification">
                  {{ qualification }}
                </li>
              </ul>
            </div>
          </div>
          <div class="mt-2 text-center">
            <RouterLink :to="jobPageLink" class="text-brand-blue-1">Expand</RouterLink>
          </div>
        </div>
      </div>
    </RouterLink>
  </li>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  job: {
    type: Object,
    required: true
  }
});

const jobPageLink = computed(() => {
  return `jobs/results/${props.job.id}`;
});
</script>

<style scoped></style>
