<template>
  <Accordion header="Organizations">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li class="w-1/2 h-8">
            <input id="Vuetube" type="checkbox" class="mr-3" />
            <label for="Vuetube">Vuetube</label>
          </li>
          <li class="w-1/2 h-8">
            <input id="Vuetube1" type="checkbox" class="mr-3" />
            <label for="Vuetube1">Vuetube1</label>
          </li>
          <li class="w-1/2 h-8">
            <input id="Vuetube2" type="checkbox" class="mr-3" />
            <label for="Vuetube2">Vuetube2</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </Accordion>
</template>

<script setup>
import Accordion from '@/components/Shared/AccordionComponent.vue';
</script>

<style lang="scss" scoped></style>
