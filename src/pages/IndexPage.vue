<template>
  <q-page class="bg-white">
    <div class="row no-wrap q-px-md q-pt-md">
      <q-btn
        v-if="main.getTemplate === 'products'"
        flat
        dense
        color="grey"
        no-caps
        label="Назад"
        icon="chevron_left"
        @click="main.changeTemplate('catalog')"
      />
      <div
        class="text-weight-bolder text-h5 ellipsis q-ml-sm"
        v-if="main.getTemplate !== 'auth'"
      >
        {{ main.getTemplateText }}
      </div>
    </div>

    <q-tab-panels v-model="main.getTemplate" animated>
      <q-tab-panel name="auth" class="no-padding">
        <div class="q-px-md q-pb-md">
          <AuthTemplate />
        </div>
      </q-tab-panel>
      <q-tab-panel name="catalog" class="no-padding">
        <div class="q-px-md q-pb-md">
          <CategoryTemplate />
        </div>
      </q-tab-panel>
      <q-tab-panel name="products" class="no-padding">
        <div class="q-px-md q-pb-md">
          <ProductsTemplate />
        </div>
      </q-tab-panel>
    </q-tab-panels>
  </q-page>
</template>

<script setup lang="ts">
import { useMainStore } from 'stores/Main/main';
import CategoryTemplate from 'components/templates/CategoryTemplate.vue';
import ProductsTemplate from 'components/templates/ProductsTemplate.vue';
import AuthTemplate from 'components/templates/AuthTemplate.vue';

const main = useMainStore();
</script>
