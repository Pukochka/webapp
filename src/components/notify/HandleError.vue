<template>
  <q-dialog v-model="auth.errorHadler.state" persistent>
    <q-card>
      <q-card-section>
        <div class="text-h6">Походу что-то пошло не так...</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ auth.errorHadler.message }}
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat size="md" label="Закрыть" color="red" v-close-popup />
        <q-btn
          v-if="auth.errorHadler.reload"
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
import { config } from 'src/config';
import { useAuthStore } from 'stores/Auth/auth';

const auth = useAuthStore();

const reload = () => location.reload();
</script>

<style scoped></style>
