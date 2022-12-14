<template>
  <q-card class="fit column justify-between" flat bordered>
    <q-card-section horizontal>
      <q-card-section class="q-pt-xs q-pb-xs">
        <div class="text-overline">Категория</div>
        <div class="text-h6 q-mt-xs q-mb-xs">
          {{ category?.range[0] }} - {{ category?.range[1] }} баллов
        </div>
      </q-card-section>
    </q-card-section>
    <div class="">
      <q-separator />

      <q-card-actions align="right">
        <q-btn
          dense
          flat
          color="red"
          no-caps
          label="Смотреть"
          @click="main.changeTemplate('products', category)"
        />
      </q-card-actions>
    </div>
  </q-card>
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
