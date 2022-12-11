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
import { TelegramUser } from 'src/types';

export const useAuthStore = defineStore('auth', () => {
  const data = useDataStore();
  const user = ref<TelegramUser>();

  const error = ref<boolean>(false);
  const loading = ref<boolean>(true);

  const _init = () => (loading.value = true);
  fetchRegionsData('index').then((response) => {
    if (response?.data.result) {
      data.initRegions(response.data.data);
      userAuth(`${config.INIT_DATA}`).then((response) => {
        if (response?.data.result) {
          user.value = response.data.data;
          fetchUserData('get', { id: user.value?.telegram_id }).then(
            (response) => {
              if (response?.data.result) {
                data.initUser(response.data.data);
                fetchBotData('products', { id: user.value?.telegram_id }).then(
                  (response) => {
                    console.log(response);
                    data.initProducts(response?.data);
                    loading.value = false;
                  }
                );
              } else {
              }
            }
          );
        } else {
          error.value = true;
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
  const getUser = computed(() => user.value);
  const errorHadler = computed(() => error.value);
  return {
    user,
    getLoading,
    errorHadler,
    getUser,
    _init,
    init,
  };
});
