import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import {
  fetchBotData,
  fetchRegionsData,
  fetchUserData,
  userAuth,
} from 'src/api';
import { useDataStore } from 'stores/Data/data';
import { config } from 'src/config';

export const useAuthStore = defineStore('auth', () => {
  const data = useDataStore();

  const error = ref<boolean>(false);
  const user = ref();
  const loading = ref<boolean>(true);

  const _init = () =>
    userAuth(`${config.INIT_DATA}`).then((response) => {
      console.log(response);
      console.log(window.Telegram.WebApp.initData);
      if (response?.data.result) {
        fetchUserData('get', { id: 1028741753 }).then((response) => {
          if (response?.data.result) {
            data.initUser(response.data.data);
            fetchBotData('products', { id: 1028741753 }).then((response) => {
              console.log(response);
              data.initProducts(response?.data);
            });
          } else {
          }
        });
        fetchRegionsData('index').then((response) => {
          if (response?.data.result) {
            data.initRegions(response.data.data);
          } else {
          }
        });
      } else {
      }
    });
  const init = () => {
    loading.value = true;
    fetchUserData('get', { id: 1028741753 }).then((response) => {
      if (response?.data.result) {
        data.initUser(response.data.data);
        fetchBotData('products', { id: 1028741753 }).then((res) => {
          console.log(res);
          data.initProducts(res?.data);
          loading.value = false;
        });
        fetchRegionsData('index').then((res) => {
          if (res?.data.result) {
            data.initRegions(res.data.data);
          } else {
          }
        });
      } else {
        error.value = true;
      }
    });
  };

  const getLoading = computed(() => loading.value);
  const errorHadler = computed(() => error.value);
  return {
    user,
    getLoading,
    errorHadler,
    _init,
    init,
  };
});
