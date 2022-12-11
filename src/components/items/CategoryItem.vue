<template>
  <q-item
    class="rounded-borders outiline text-red-3 shadow-1 relative-position no-padding"
    clickable
    v-ripple
    @click="main.changeTemplate('products', category)"
  >
    <div
      class="floating-left absolute rounded-borders bg-red-4 text-caption q-px-sm text-white"
    >
      Категория
    </div>
    <div class="q-pa-sm q-pt-lg flex">
      <div class="row full-width">
        <div
          class="text-bold text-black text-subtitle1 rounded-borders bg-red-4 q-px-sm col"
        >
          {{ category?.range[0] }} - {{ category?.range[1] }} баллов
        </div>
      </div>
      <div class="row full-width justify-end q-mt-sm">
        <q-btn dense flat color="red" no-caps label="Смотреть" />
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
