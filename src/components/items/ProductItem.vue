<template>
  <q-item
    class="rounded-borders outiline no-padding shadow-1 relative-position"
  >
    <div
      class="floating-left absolute rounded-borders bg-red-4 text-caption q-px-sm text-white"
    >
      Товар
    </div>
    <div class="q-pa-sm flex">
      <div class="row full-width">
        <div
          class="text-bold text-subtitle1 text-black rounded-borders col q-mt-md q-px-sm"
        >
          {{ product?.range[0] }}-{{ product?.range[1] }} баллов
        </div>
      </div>

      <div class="row full-width q-mt-sm">
        <q-btn
          v-ripple="false"
          dense
          flat
          unelevated
          color="ref"
          text-color="red"
          class="col"
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

<style lang="scss" scoped>
.floating-left {
  top: -3px;
  left: -3px;
}
</style>
