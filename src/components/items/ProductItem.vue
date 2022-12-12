<template>
  <q-card class="fit column justify-between" flat bordered>
    <q-card-section horizontal>
      <q-card-section class="q-pt-xs q-pb-xs">
        <div class="text-overline">Товар</div>
        <div class="text-h6 q-mt-xs q-mb-xs">
          {{ product?.range[0] }}-{{ product?.range[1] }} баллов
        </div>
      </q-card-section>
    </q-card-section>
    <div class="">
      <q-separator />

      <q-card-actions>
        <q-btn
          dense
          flat
          unelevated
          color="ref"
          text-color="red"
          class="col text-weight-bolder"
          align="left"
          :label="product?.price + ' ₽'"
        />
        <q-btn
          dense
          flat
          unelevated
          color="ref"
          text-color="red"
          class="col"
          label="Купить"
          @click="openMenu"
        />
      </q-card-actions>
    </div>
  </q-card>
</template>

<script lang="ts" setup>
import { PropType, defineProps } from 'vue';
import { Items } from 'src/types';
import { useMainStore } from 'stores/Main/main';

const props = defineProps({
  product: Object as PropType<Items>,
});

const main = useMainStore();

const openMenu = () => {
  main.selectItem(props.product);
  main.changeStateMenu();
};
</script>

<style lang="scss" scoped>
.floating-left {
  top: -3px;
  left: -3px;
}
</style>
