<template>
  <div class="q-py-md">
    <div class="row q-col-gutter-sm">
      <div
        class="col-6"
        v-for="(category, index) in data.getProducts"
        :key="index"
      >
        <CategoryItem :category="category" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useDataStore } from 'stores/Data/data';
import CategoryItem from 'components/items/CategoryItem.vue';
import { fetchBotData } from 'src/api';
import { useAuthStore } from 'stores/Auth/auth';

const data = useDataStore();
const auth = useAuthStore();

onMounted(() => {
  fetchBotData('products').then((response) => {
    if (response?.data.result) {
      data.initProducts(response?.data);
    } else {
      auth.createError({
        state: true,
        message: response?.data.message + 'dasdad',
        reload: false,
      });
    }
  });
});
</script>

<style lang="scss" scoped></style>
