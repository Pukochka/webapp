<template>
  <q-dialog v-model="main.getChangeRegion.state">
    <q-card>
      <q-card-section class="text-h6">
        <div class="">Изменить текущий регион на</div>
        <div class="text-bold text-center">
          {{ main.getChangeRegion.region.desc }}
        </div>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat size="md" label="Отмена" color="red-4" v-close-popup />
        <q-btn
          size="md"
          label="Изменить"
          color="red-4"
          :loading="loading"
          @click="changeRegion"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useMainStore } from 'stores/Main/main';
import { fetchUserData } from 'src/api';
import { useDataStore } from 'stores/Data/data';
const main = useMainStore();
const data = useDataStore();
const loading = ref<boolean>(false);

const changeRegion = () => {
  loading.value = true;
  fetchUserData('update', {
    id: 1028741753,
    region: main.getChangeRegion.region.new_code,
  }).then((response) => {
    if (response?.data.result) {
      loading.value = false;
      main.changeStateChangeRegion({ new_code: '' }, false);
      data.initUser(response.data.data);
      data.changeProducts();
    }
  });
};
</script>

<style scoped></style>
