<template>
  <div class="q-pa-md">
    <q-input
      v-model="text"
      label="Введите название региона"
      outlined
      color="grey"
      hint="Для изменения своего региона выберите"
      autofocus
    >
      <template v-slot:append>
        <q-icon name="search" color="red-4" size="32px" />
      </template>
    </q-input>
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
        :class="{ 'bg-red-2': data.getUser.region === region.new_code }"
        v-for="(region, index) in filtered"
        :key="index"
        @click="sureSelectRegion(region)"
      >
        <q-item-section>
          <q-item-label>{{ region.desc }}</q-item-label>
          <q-item-label caption v-if="data.getUser.region === region.new_code"
            >Выбранный регион</q-item-label
          ></q-item-section
        >
      </q-item>
    </q-list>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useDataStore } from 'stores/Data/data';
import { useMainStore } from 'stores/Main/main';
import { Regions } from 'src/types';
const data = useDataStore();
const main = useMainStore();

const text = ref<string>('');

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

const sureSelectRegion = (region: Regions) => {
  if (data.getUser?.region === region.new_code) return;
  main.changeStateChangeRegion(region, true);
};
</script>

<style lang="scss" scoped></style>
