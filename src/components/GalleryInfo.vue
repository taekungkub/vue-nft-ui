<template>
  <div class="item flex justify-between mt-1.5">
    <div class="flex items-center gap-2">
      <div class="title text-sm text-gray-400">
        <slot name="title"></slot>
      </div>
      <IconInfo class="text-purple-400 cursor-pointer" v-if="!props.hidden" />
    </div>
    <div class="content font-medium">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconInfo from "./Icons/IconInfo.vue";

const props = defineProps({
  hidden: {
    type: Boolean,
  },
});
</script>

<style scoped></style>
