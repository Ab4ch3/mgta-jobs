<template>
  <main class="flex flex-col h-screen">
    <section class="flex flex-col pt-10 pb-20">
      <div class="grid grid-cols-12">
        <div class="grid-start-1 col-span-1"></div>
        <div class="grid-start-7 col-span-5">
          <HeadLine />
          <JobSearch />
        </div>
        <div class="grid-start-2 col-span-5 self-center justify-self-center">
          <img class="w-80 h-80 object-contain" src="@/assets/img/profile.jpeg" alt="" srcset="" />
        </div>
        <div class="grid-start-11 col-span-1"></div>
      </div>
    </section>

    <Spotlight class="flex flex-row justify-center pb-16">
      <template #default="slotProps">
        <RouterLink
          to="/jobs/results"
          class="flex flex-col mx-5 border rounded-lg w-72 bg-brand-gray-2 h-96"
        >
          <img :src="slotProps.spotlight.img" alt="img" class="object-contain" />

          <div class="h-48 px-6 py-4 mt-3">
            <h3 class="text-lg font-medium">{{ slotProps.spotlight.title }}</h3>

            <p class="mt-3 text-sm">{{ slotProps.spotlight.description }}</p>
          </div>

          <RouterLink to="/jobs/results" class="px-6 py-4 text-sm text-brand-blue-1"
            >See Jobs</RouterLink
          >
        </RouterLink>
      </template>
    </Spotlight>
  </main>
</template>

<script setup>
import HeadLine from '@/components/JobSearch/HeadLine.vue';
import JobSearch from '@/components/JobSearch/JobSearchForm.vue';
import Spotlight from '@/components/JobSearch/SpotLight.vue';
</script>

<style scoped></style>
``
