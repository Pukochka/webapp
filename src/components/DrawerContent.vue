<template>
  <div class="bg-red-1 q-pa-md rounded-borders q-ma-md">
    <div class="text-h5 text-weight-bolder">Артемий Пуко</div>
    <div class="text-caption text-weight-bolder text-red-4">@melart</div>
  </div>
  <q-list padding class="q-px-md column q-gutter-xs">
    <q-item clickable v-ripple class="rounded-borders">
      <q-item-section avatar>
        <q-icon
          name="shopping_cart"
          color="red-4"
          size="32px"
        /> </q-item-section
      ><q-item-section>Магазин</q-item-section>
      <q-item-section avatar>
        <div class="text-red-4 text-subtitle1">Магнит</div>
      </q-item-section>
    </q-item>
    <q-item clickable v-ripple class="rounded-borders">
      <q-item-section avatar>
        <q-icon
          name="account_balance_wallet"
          color="red-4"
          size="32px"
        /> </q-item-section
      ><q-item-section>Баланс</q-item-section>
      <q-item-section avatar>
        <div class="text-red-4 text-subtitle1">1000 Р</div>
      </q-item-section>
    </q-item>
    <q-item clickable v-ripple class="rounded-borders" @click="$emit('close')">
      <q-item-section avatar>
        <q-icon name="public" color="red-4" size="32px" /> </q-item-section
      ><q-item-section>Регион</q-item-section>
      <q-item-section avatar>
        <div class="text-red-4 text-subtitle1">{{ data.getRegionText }}</div>
      </q-item-section>
    </q-item>
  </q-list>
  <div class="q-pa-md text-grey text-caption">
    Списание доступно только на обычной кассе, баллами оплатить можно до 50%
    стоимости покупки
  </div>
</template>

<script lang="ts" setup>
import { defineEmits } from 'vue';

const emit = defineEmits<{
  (e: 'close'): void;
}>();
import { useDataStore } from 'stores/Data/data';

const data = useDataStore();
</script>

<style lang="scss" scoped></style>
