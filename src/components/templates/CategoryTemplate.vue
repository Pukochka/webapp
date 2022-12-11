<template>
  <div class="q-py-md">
    <div class="row q-col-gutter-sm">
      <div
        class="col-6"
        v-for="(category, index) in data.getProducts"
        :key="index"
      >
        <CategoryItem :category="category" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDataStore } from 'stores/Data/data';
import CategoryItem from 'components/items/CategoryItem.vue';

const data = useDataStore();
</script>

<style lang="scss" scoped></style>
