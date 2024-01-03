<template>
  <input
    type="text"
    :placeholder="props.placeholder"
    :value="value"
    class="w-full text-lg font-normal focus:outline-none"
    @input="handleInput"
  />
</template>

<script setup>
import { defineEmits } from 'vue';
const props = defineProps({
  placeholder: {
    type: String,
    required: false,
    default: ''
  },
  value: {
    type: String,
    required: true,
    default: ''
  }
});
const emit = defineEmits('handleInput');

const handleInput = ($event) => {
  emit('handle-input', $event.target.value);
};
</script>

<style scoped></style>
