<template>
  <div class="q-py-md">
    <div
      class="text-h6 text-center text-grey"
      v-if="!main.getSelectProduct.items.length || is_no_products"
    >
      Товаров не осталось
    </div>
    <div class="row q-col-gutter-sm">
      <div
        class="col-6"
        v-for="(product, index) in main.getSelectProduct.items"
        :key="index"
        v-show="product.amount"
      >
        <ProductItem :product="product" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMainStore } from 'stores/Main/main';
import { computed } from 'vue';
import ProductItem from 'components/items/ProductItem.vue';

const main = useMainStore();

const is_no_products = computed(() => {
  let no_products = 0;
  for (const item of main.getSelectProduct.items) {
    if (!item.amount) no_products++;
  }
  return main.getSelectProduct.items.length === no_products;
});
</script>

<style lang="scss" scoped></style>
