<template>
  <q-item
    class="rounded-borders outiline text-red-3 shadow-1 relative-position no-padding"
    clickable
    v-ripple
    @click="main.changeTemplate('products', category)"
  >
    <div
      class="floating-left absolute rounded-borders bg-grey text-caption q-px-sm text-white"
    >
      Категория
    </div>
    <div class="q-pa-sm">
      <div class="text-bold text-black text-subtitle1 q-pb-lg q-pt-md">
        {{ category.range[0] }} - {{ category.range[1] }} баллов
      </div>
    </div>
  </q-item>
</template>

<script setup lang="ts">
import { PropType, defineProps } from 'vue';
import { Products } from 'src/types';
import { useMainStore } from 'stores/Main/main';

const props = defineProps({
  category: Object as PropType<Products>,
});

const main = useMainStore();
</script>

<style lang="scss" scoped>
.floating-left {
  top: -3px;
  left: -3px;
}
</style>
