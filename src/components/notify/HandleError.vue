<template>
  <q-dialog v-model="auth.errorHadler">
    <q-card>
      <q-card-section>
        <div class="text-h6">Походу что-то пошло не так...</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        Проблемы с интернетом. Попробуйте перезагрузить страницу.
        <div class="">url {{ url }}</div>
        <div class="">webapp {{ webapp }}</div>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn
          flat
          size="md"
          label="Перезарузить"
          color="red"
          @click="reload"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { useAuthStore } from 'stores/Auth/auth';
import { computed } from 'vue';

const auth = useAuthStore();

const reload = () => location.reload();
const url = computed(() => window.location.href);
const webapp = computed(() => window.Telegram.WebApp.initData);
</script>

<style scoped></style>
