<template>
  <div class="text-h6">Для авторизации, выберите ваш регион</div>
  <div class="q-pa-md">
    <q-input
      v-model="text"
      label="Введите название региона"
      outlined
      color="grey"
      autofocus
    >
      <template v-slot:append>
        <q-icon name="search" color="red-4" size="32px" />
      </template>
    </q-input>
    <q-scroll-area style="height: 300px">
      <q-list padding separator>
        <q-item
          clickable
          v-ripple
          class="rounded-borders bg-red-3"
          v-if="!filtered.length"
        >
          <q-item-section class="text-center">Ничего не найдено</q-item-section>
        </q-item>
        <q-item
          clickable
          v-ripple
          class="rounded-borders"
          :class="{ 'bg-red-2': selected_region.new_code === region.new_code }"
          v-for="(region, index) in filtered"
          :key="index"
          @click="selected_region = Object.assign({}, region)"
        >
          <q-item-section>
            <q-item-label>{{ region.desc }}</q-item-label>
            <q-item-label
              caption
              v-if="selected_region.new_code === region.new_code"
              >Выбранный регион</q-item-label
            ></q-item-section
          >
        </q-item>
      </q-list>
    </q-scroll-area>
    <div class="row q-mt-md">
      <q-btn
        class="col-12"
        unelevated
        color="red"
        icon="check"
        label="Выбрать регион"
        @click="register"
        :disable="selected_region.code === -1"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { useDataStore } from 'stores/Data/data';
import { useMainStore } from 'stores/Main/main';
import { fetchUserData, userAuth } from 'src/api';
import { Regions } from 'src/types';
import { useAuthStore } from 'stores/Auth/auth';
import { config } from 'src/config';
const data = useDataStore();
const main = useMainStore();
const auth = useAuthStore();

auth._init();

const text = ref<string>('');

const register = () => {
  fetchUserData('create', {
    id: auth.getUser?.telegram_id,
    region: selected_region.value.new_code,
  }).then((response) => {
    if (response?.data.result) {
      data.initUser(response.data.data);
      main.changeTemplate('catalog');
    }
  });
};

const selected_region = ref<Regions>({
  rcode: -1,
  code: -1,
  desc: '-1',
  new_code: '-1',
});

const filtered = computed(() =>
  data.getRegions
    .filter((item) =>
      item.desc.toLowerCase().includes(text.value.toLowerCase())
    )
    .sort((a) => {
      if (a.new_code === data.getUser?.region) return -1;
      return 0;
    })
);
</script>

<style scoped></style>
