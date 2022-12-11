<template>
  <q-dialog
    transition-duration="200"
    v-model="main.getProductMenu"
    full-height
    full-width
    position="bottom"
    no-shake
    persistent
  >
    <q-card style="border-top-right-radius: 20px; border-top-left-radius: 20px">
      <q-card-section class="row justify-between items-center">
        <div class="">
          <div class="text-h5 text-weight-bold">
            {{ main.getSelectItem?.range[0] }}-{{ main.getSelectItem?.range[1] }}
            баллов
          </div>
          <q-separator />
        </div>

        <q-btn
          flat
          size="md"
          color="red"
          icon="close"
          @click="main.changeStateMenu"
        />
      </q-card-section>
      <q-card-section class="q-my-lg text-subtitle1">
        <q-list padding>
          <q-item>
            <q-item-section>Баланс</q-item-section>
            <q-item-section avatar class="text-weight-bold"
              >от {{ main.getSelectItem?.range[0] }} до
              {{ main.getSelectItem?.range[1] }} баллов</q-item-section
            >
          </q-item>
          <q-item>
            <q-item-section>Количество</q-item-section>
            <q-item-section avatar class="text-weight-bold"
              >{{ counter }} шт.</q-item-section
            >
          </q-item>
          <q-item>
            <q-item-section>Цена</q-item-section>
            <q-item-section avatar class="text-weight-bold"
              >{{ price }} р</q-item-section
            >
          </q-item>
          <q-separator />
          <q-item>
            <q-item-section>Итого</q-item-section>
            <q-item-section avatar class="text-weight-bold"
              >{{ calcPrice }} р
            </q-item-section>
          </q-item>
        </q-list>
        <div
          class="menu-outline row justify-between items-center rounded-borders"
        >
          <q-btn
            flat
            unelevated
            color="red-5"
            icon="remove"
            :disable="counter <= 1"
            @click="decrement"
          />
          <div class="text-h6">{{ counter }}</div>
          <q-btn
            flat
            unelevated
            color="red-5"
            icon="add"
            :disable="counter >= 20"
            @click="increment"
          />
        </div>
        <div class="row q-mt-sm">
          <q-btn
            flat
            class="col-12"
            unelevated
            color="red-5"
            :label="`Добавить ${counter === 20 ? '' : 20 - counter}`"
            @click="counter = 20"
            :disable="counter === 20"
          />
        </div>
        <div class="text-caption text-grey">
          За один раз можно купить 20 шт.
        </div>
      </q-card-section>
      <div class="row">
        <q-btn
          size="15px"
          square
          class="col-12"
          color="positive"
          :label="`Оформить заказ  ${counter}  шт.`"
        />
      </div>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { ref, computed, onUpdated } from 'vue';
import { useMainStore } from 'stores/Main/main';
import { useQuasar } from 'quasar';

const main = useMainStore();
const $q = useQuasar();

const counter = ref<number>(1);
const price = ref<number>(100);
const increment = () => {
  counter.value++;
  if (counter.value === 20) {
    $q.notify({
      message: 'За один раз можно купить не более 20 шт.',
      position: 'top',
      timeout: 3000,
    });
  }
};

const decrement = () => {
  counter.value--;
};

const calcPrice = computed(() => price.value * counter.value);
onUpdated(() => {
  counter.value = 1;
});
</script>

<style lang="scss" scoped>
.menu-outline {
  outline: 2px solid #e3e3e3;
}
</style>
