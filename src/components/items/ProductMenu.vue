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
            {{ main.getSelectItem?.range[0] }}-{{
              main.getSelectItem?.range[1]
            }}
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
      <q-card-section class="text-subtitle1">
        <q-list padding>
          <q-item>
            <q-item-section>Баланс</q-item-section>
            <q-item-section avatar class="text-weight-bold"
              >от {{ main.getSelectItem?.range[0] }} до
              {{ main.getSelectItem?.range[1] }} баллов</q-item-section
            >
          </q-item>
          <q-item v-if="main.getSelectItem?.amount">
            <q-item-section>Количество</q-item-section>
            <q-item-section avatar class="text-weight-bold"
              >{{ counter }} шт.</q-item-section
            >
          </q-item>
          <q-item>
            <q-item-section>Цена</q-item-section>
            <q-item-section avatar class="text-weight-bold"
              >{{ price }} ₽</q-item-section
            >
          </q-item>
          <q-separator v-if="main.getSelectItem?.amount" />
          <q-item v-if="main.getSelectItem?.amount">
            <q-item-section>Итого</q-item-section>
            <q-item-section avatar class="text-weight-bold"
              >{{ calcPrice }} ₽
            </q-item-section>
          </q-item>
        </q-list>
        <div
          class="menu-outline row justify-between items-center rounded-borders"
          v-if="main.getSelectItem?.amount"
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
            :disable="condition.value"
            @click="increment"
          />
        </div>
        <div class="row q-mt-sm" v-if="main.getSelectItem?.amount">
          <q-btn
            flat
            class="col-12"
            unelevated
            color="red-5"
            :label="`Добавить ${
              main.getSelectItem?.amount >= 20
                ? 20 - counter
                : main.getSelectItem?.amount
            }`"
            @click="
              counter =
                main.getSelectItem?.amount >= 20
                  ? 20
                  : main.getSelectItem?.amount
            "
            :disable="
              counter === 20 ||
              counter === main.getSelectItem?.amount ||
              !main.getSelectItem?.amount
            "
          />
        </div>
        <div class="text-caption text-grey" v-if="main.getSelectItem?.amount">
          За один раз можно купить 20 шт.
        </div>
        <div
          class="text-grey text-subtitle1 text-center"
          v-if="!main.getSelectItem?.amount"
        >
          Товара не осталось.
        </div>
      </q-card-section>
      <div class="row">
        <q-btn
          size="15px"
          square
          class="col-12"
          color="positive"
          v-if="main.getSelectItem?.amount"
          :loading="loading"
          :label="`Оформить заказ  ${counter}  шт.`"
          @click="createOrder"
        />
      </div>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { ref, computed, onUpdated, watch } from 'vue';
import { useMainStore } from 'stores/Main/main';
import { useQuasar } from 'quasar';
import { fetchBotData } from 'src/api';
import { useAuthStore } from 'stores/Auth/auth';
import { config } from 'src/config';

const main = useMainStore();
const auth = useAuthStore();
const $q = useQuasar();

const counter = ref<number>(1);
const price = ref<number | undefined>(100);
const loading = ref<boolean>(false);

const condition = computed(
  () => counter.value < (main.getSelectItem?.amount ?? 0) && counter.value < 20
);

watch(counter, (val) => {
  if (val === 20) {
    $q.notify({
      message: 'За один раз можно купить не более 20 шт.',
      position: 'top',
      timeout: 3000,
    });
  }
  if (val === main.getSelectItem?.amount) {
    $q.notify({
      message: 'Товара не осталось!',
      position: 'top',
      timeout: 3000,
    });
  }
});
const increment = () => {
  if (condition.value) {
    counter.value++;
  } else {
    $q.notify({
      message: 'Товара не осталось!',
      position: 'top',
      timeout: 3000,
    });
  }
};

const decrement = () => {
  counter.value--;
};

const calcPrice = computed(() => price.value * counter.value);

const createOrder = () => {
  loading.value = true;
  fetchBotData('create-order', {
    id: auth.getUser?.user.telegram_id,
    public_key: config.SECRET,
    secret_user_key: auth.getUser?.secret_user_key,
    range: main.getSelectItem?.range[0],
    count: counter.value,
  }).then((response) => {
    if (response?.data.result) {
      window.Telegram.WebApp.close();
    } else {
      loading.value = false;
      auth.createError({
        state: true,
        message: response?.data.message,
        reload: false,
      });
    }
  });
};
onUpdated(() => {
  counter.value = 1;
  price.value = main.getSelectItem?.price;
});
</script>

<style lang="scss" scoped>
.menu-outline {
  outline: 1px solid #e3e3e3;
}
</style>
