<template>
  <div class="p-3 bg-white rounded-lg px-4">
    <div class="flex gap-3 justify-between items-center">
      <div>
        <img
          src="https://assets.raribleuserdata.com/prod/v1/image/t_avatar_big/aHR0cHM6Ly9pcGZzLnJhcmlibGV1c2VyZGF0YS5jb20vaXBmcy9RbVNUckE1cGNmNzVUTlpSV1pjNUZpSnJhakp6bU1HQ3dmQ3FmVkFwRGtnY0tF"
          class="w-full block mx-auto rounded-2xl max-w-[55px]"
          alt=""
        />
      </div>
      <div class="flex gap-3 items-center">
        <div>
          <img
            :src="props.item?.image"
            class="w-full block mx-auto rounded-2xl max-w-[55px]"
            alt=""
          />
        </div>
        <p class="font-bold text-xs">
          {{ props.item?.title }} {{ props.item?.id }}
        </p>
      </div>
      <div class="hidden sm:flex items-center gap-1">
        <span class="font-bold text-xs">
          Ξ{{ props.item?.eatimated_price }}
        </span>
        <IconInfo />
      </div>
      <div class="hidden sm:flex items-center gap-1">
        <span class="font-bold text-xs"> Ξ{{ props.item?.floor_price }} </span>
        <IconInfo />
      </div>
      <div class="hidden sm:flex items-center gap-1">
        <span
          class="font-bold text-xs"
          :class="{
            'text-[#bfbfc9]': Number(props.item?.acquisition_price) <= 0,
          }"
        >
          Ξ{{ props.item?.acquisition_price }}
        </span>
      </div>
      <div class="hidden sm:flex text-xs">
        <span class="text-xs font-bold">
          {{ props.item?.acquisition_date }}</span
        >
      </div>
      <div>
        <button class="border p-1.5 px-2.5 rounded-lg">
          <img
            src="https://static-00.iconduck.com/assets.00/ethereum-icon-317x512-0vz32hj4.png"
            class="w-full max-w-[13px] block mx-auto"
            alt=""
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IData } from "../constant/data";
import IconInfo from "./Icons/IconInfo.vue";

const props = defineProps({
  item: Object as () => IData,
});
</script>

<style scoped></style>
