<template>
  <div class="p-3 rounded-md max-w-[350px] bg-white">
    <div class="p-3 border rounded-md">
      <div class="block mx-auto p-5">
        <img
          src="../assets/pen.png"
          class="w-full block mx-auto max-w-[200px] rounded-3xl hover:scale-110 transition-all duration-400"
          alt=""
        />
      </div>
      <div class="title text-base font-bold text-center">{{ props.item?.title }} {{ props.item?.id }}</div>

      <div class="item flex justify-between mt-10">
        <div class="flex items-center gap-2">
          <div class="title text-sm text-gray-400">Eatimated Price</div>
          <IconInfo class="text-purple-400 cursor-pointer" />
        </div>
        <div class="content font-medium">{{ props.item?.eatimated_price }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IData } from "../constant/data"
import IconInfo from "./Icons/IconInfo.vue"

const props = defineProps({
  item: Object as () => IData,
})
</script>

<style scoped></style>
