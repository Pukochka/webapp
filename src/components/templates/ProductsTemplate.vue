<template>
  <div class="q-py-md">
    <div class="row q-col-gutter-sm">
      <div
        class="col-6"
        v-for="(product, index) in main.getSelectProduct.items"
        :key="index"
      >
        <ProductItem :product="product" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMainStore } from 'stores/Main/main';
import { PropType, defineProps } from 'vue';
import { Products } from 'src/types';
import ProductItem from 'components/items/ProductItem.vue';

const props = defineProps({
  product: Object as PropType<Products>,
});

const main = useMainStore();
</script>

<style lang="scss" scoped></style>
