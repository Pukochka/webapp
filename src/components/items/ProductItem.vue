<template>
  <q-card class="my-card" flat bordered>
    <q-card-section horizontal>
      <q-card-section class="q-pt-xs">
        <div class="text-overline">Overline</div>
        <div class="text-h5 q-mt-sm q-mb-xs">{{ product?.range[0] }}-{{ product?.range[1] }} баллов</div>
        <div class="text-caption text-grey">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </q-card-section>

      <q-card-section class="col-5 flex flex-center">
        <q-img
          class="rounded-borders"
          src="https://cdn.quasar.dev/img/parallax2.jpg"
        />
      </q-card-section>
    </q-card-section>

    <q-separator />

    <q-card-actions>
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
    </q-card-actions>
  </q-card>
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
