<template>
  <q-item
    class="rounded-borders outiline no-padding shadow-1 relative-position"
  >
    <div
      class="floating-left absolute rounded-borders bg-grey text-caption q-px-sm text-white"
    >
      Товар
    </div>
    <div class="q-pa-sm flex flex-center">
      <div class="text-weight-bolder text-subtitle1 text-black q-pt-md">
        {{ product.range[0] }}-{{ product.range[1] }} баллов
      </div>
      <div class="row full-width">
        <q-btn
          dense
          flat
          unelevated
          color="ref"
          text-color="red"
          class="col-12"
          label="Купить"
          @click="openMenu"
        />
      </div>
    </div>
  </q-item>
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

<style lang="scss" scoped></style>
