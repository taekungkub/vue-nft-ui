<template>
  <div class="item sm:flex justify-between mt-1.5">
    <div class="flex items-center gap-2">
      <div class="text-xs text-gray-400 font-medium tracking-wide">
        <slot name="title"></slot>
      </div>
      <IconInfo class="text-purple-400 cursor-pointer" v-if="!props.hidden" />
    </div>
    <div
      class="text-xs font-bold tracking-wider"
      :class="{
        'text-[#bfbfc9]': disabled,
      }"
    >
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
  disabled: {
    type: Boolean,
  },
});
</script>

<style scoped></style>
