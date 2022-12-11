<template>
  <q-layout view="hHh lpr fFr">
    <q-header bordered class="bg-white text-red">
      <q-toolbar>
        <q-toolbar-title
          class="text-h5 text-weight-bolder row items-center no-wrap"
        >
          <q-avatar square size="28px">
            <img src="~/assets/magnet.png" />
          </q-avatar>
          <div class="q-ml-sm q-mt-xs">Магнит</div>
        </q-toolbar-title>
        <q-btn-dropdown
          dense
          color="red"
          class="text-weight-bolder ellipsis"
          flat
          no-caps
          :label="data.getRegionText"
          v-model="selectRegion"
        >
          <div style="width: calc(100vw - 40px)">
            <RegionSelect />
          </div>
        </q-btn-dropdown>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="rightDrawerOpen"
      side="right"
      overlay
      behavior="mobile"
      elevated
    >
      <DrawerContent @close="openRegionSelect" />
    </q-drawer>

    <q-page-container>
      <transition name="fade">
        <div
          class="fixed fullscreen flex flex-center bg-white"
          v-if="auth.getLoading"
        >
          <div class="column flex flex-center">
            <q-spinner size="5em" color="red-4" />
            <div class="text-caption text-grey">Пожалуйста подождите...</div>
          </div>
        </div>
      </transition>

      <router-view />
    </q-page-container>
    <q-footer bordered class="bg-white text-primary">
      <q-toolbar>
        <q-btn
          no-caps
          stack
          class="col text-weight-bolder"
          flat
          size="md"
          color="red-4"
          icon="inventory_2"
          label="Каталог"
          @click="main.changeTemplate('catalog')"
        />
        <q-btn
          no-caps
          stack
          class="col text-weight-bolder"
          flat
          size="md"
          color="red-4"
          icon="person"
          label="Профиль"
          @click="toggleRightDrawer"
        />
      </q-toolbar>
    </q-footer>
    <ProductMenu />
    <HandleError />
    <ChangeRegion />
  </q-layout>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import DrawerContent from 'components/DrawerContent.vue';
import RegionSelect from 'components/RegionSelect.vue';
import ProductMenu from 'components/items/ProductMenu.vue';
import ChangeRegion from 'components/notify/ChangeRegion.vue';
import HandleError from 'components/notify/HandleError.vue';

import { useMainStore } from 'stores/Main/main';
import { useDataStore } from 'stores/Data/data';
import { useAuthStore } from 'stores/Auth/auth';

const main = useMainStore();
const data = useDataStore();
const auth = useAuthStore();

const rightDrawerOpen = ref<boolean>(false);
const selectRegion = ref<boolean>(false);

auth.init();

const toggleRightDrawer = () => {
  rightDrawerOpen.value = !rightDrawerOpen.value;
};

const openRegionSelect = () => {
  selectRegion.value = true;
  rightDrawerOpen.value = false;
};
</script>
