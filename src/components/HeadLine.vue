<template>
  <section class="mb-16">
    <h1 class="font-bold tracking-tighter text-8xl mb-14">
      <span :class="actionClasses">{{ action }}</span>
      <br />
      For everyone
    </h1>
    <h2 class="text-3xl font-light">Find your next job at Mgta Jobs.</h2>
  </section>
</template>

<script setup>
import { computed, onBeforeUnmount, ref } from 'vue';

let action = ref('Build');
let interval = null;

/* Computed properties */
const actionClasses = computed(() => {
  return {
    [action.value.toLocaleLowerCase()]: true
  };
});

/* Methods */
const changeTitle = () => {
  interval = setInterval(() => {
    let actions = ['Build', 'Create', 'Design', 'Code'];
    let currentActionIndex = actions.indexOf(action.value);
    let nextActionIndex = (currentActionIndex + 1) % 4;
    let nextAction = actions[nextActionIndex];
    action.value = nextAction;
  }, 3000);
};

/*
### Lifecycle Hooks
*/
//Se ejecutara ante de crear el componente (onCreated)
changeTitle();

//Luego que desmonte el componente es recomendable limpiar el interval o el timeout
onBeforeUnmount(() => {
  clearInterval(interval);
});
</script>

<style scoped>
.build {
  color: #1a73ed;
}
.create {
  color: #34a853;
}
.design {
  color: #f9ab00;
}
.code {
  color: #d93025;
}
</style>
