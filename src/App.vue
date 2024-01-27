<template>
  <div class="container">
    <ButtonGroup v-model="isCard" />
    <div class="mt-4">
      <CardGallery :item="item" v-if="isCard" />
      <CardRow :item="item" v-else-if="!isCard" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { data } from "./constant/data";
import CardGallery from "./components/CardGallery.vue";
import CardRow from "./components/CardRow.vue";
import ButtonGroup from "./components/ButtonGroup.vue";

const isCard = ref(true);
const item = ref(data);
</script>

<style scoped></style>
