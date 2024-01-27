<template>
  <div class="flex justify-center">
    <button
      class="btn btn-primary btn-sm"
      :class="{
        'btn-ghost': isCard === false,
      }"
      @click="isCard = true"
    >
      <IconList />
    </button>
    <button
      class="btn btn-primary btn-sm"
      :class="{
        'btn-ghost': isCard === true,
      }"
      @click="isCard = false"
    >
      <IconGrid />
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

import IconList from "./Icons/IconList.vue";
import IconGrid from "./Icons/IconGrid.vue";

const props = defineProps({
  modelValue: {
    type: Boolean,
  },
});

const emit = defineEmits(["update:modelValue"]);

const isCard = computed({
  get() {
    return props.modelValue;
  },
  set(val) {
    return emit("update:modelValue", val);
  },
});
</script>

<style scoped></style>
