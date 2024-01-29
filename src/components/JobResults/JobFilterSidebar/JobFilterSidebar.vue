<template>
  <div class="flex flex-col bg-white border-r border-solid border-brand-gray-1 w-96 px-3">
    <section class="pb-5">
      <div class="flex flex-row justify-between">
        <h3 class="my-4 text-base font-semibold">what do you want to do?</h3>
        <div class="flex items-center text-sm">
          <ActionButton text="Clear Filters" type="secondary" />
        </div>
      </div>
      <Accordion header="Degree" />
      <Accordion header="Job Types">
        <p>Placeholder for Now</p>
      </Accordion>

      <JobFilterSideBarOrg />
    </section>
  </div>
</template>

<script setup>
import ActionButton from '@/components/Shared/ActionButton.vue';
import Accordion from '@/components/Shared/AccordionComponent.vue';
import JobFilterSideBarOrg from '@/components/JobResults/JobFilterSidebar/JobFilterSidebarOrg.vue';
</script>

<style lang="scss" scoped></style>
