<template>
  <div class="card_gallery p-3 rounded-md max-w-[330px] bg-white">
    <div class="p-3 border rounded-md">
      <div class="block mx-auto p-3">
        <img
          :src="props.item?.image"
          class="w-full block mx-auto max-w-[200px] rounded-3xl transition-all duration-400"
          alt=""
        />
      </div>
      <div class="title text-base font-bold text-center mb-8 mt-2">
        {{ props.item?.title }} {{ props.item?.id }}
      </div>

      <GalleryInfo>
        <template #title>Eatimated Price</template>
        <template #default> {{ props.item?.eatimated_price }} </template>
      </GalleryInfo>
      <GalleryInfo>
        <template #title>Floor Price</template>
        <template #default> {{ props.item?.floor_price }} </template>
      </GalleryInfo>
      <GalleryInfo>
        <template #title>Acquisition Price</template>
        <template #default> {{ props.item?.acquisition_price }} </template>
      </GalleryInfo>
      <GalleryInfo hidden>
        <template #title>Acquisition Date</template>
        <template #default> {{ props.item?.acquisition_date }} </template>
      </GalleryInfo>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IData } from "../constant/data";
import GalleryInfo from "./GalleryInfo.vue";
const props = defineProps({
  item: Object as () => IData,
});
</script>

<style scoped lang="scss">
.card_gallery {
  &:hover {
    img {
      scale: 1.1;
    }
  }
}
</style>
