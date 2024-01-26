<template>
  <div class="container">
    <div class="flex justify-center gap-2">
      <button
        class="btn btn-primary btn-sm"
        :class="{
          'btn-ghost': isCard === false,
        }"
        @click="isCard = true"
      >
        Card
      </button>
      <button
        class="btn btn-primary btn-sm"
        :class="{
          'btn-ghost': isCard === true,
        }"
        @click="isCard = false"
      >
        Row
      </button>
    </div>

    <div class="mt-4">
      <CardGallery :item="item" v-if="isCard" />

      <CardRow :item="item" v-else-if="!isCard" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import CardGallery from "./components/CardGallery.vue"
import { data } from "./constant/data"
import CardRow from "./components/CardRow.vue"

const isCard = ref(true)
const item = ref(data)
</script>

<style scoped></style>
