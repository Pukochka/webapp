import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import {
  fetchBotData,
  fetchRegionsData,
  fetchUserData,
  userAuth,
  userAuthPeply,
} from 'src/api';
import { useDataStore } from 'stores/Data/data';
import { config } from 'src/config';
import { TelegramUser } from 'src/types';

export const useAuthStore = defineStore('auth', () => {
  const data = useDataStore();
  const user = ref<TelegramUser>();

  const error = ref({
    state: false,
    message: 'Проблемы с интернетом. Попробуйте перезагрузить страницу.',
    reload: true,
  });
  const loading = ref<boolean>(true);

  const createError = (value: {
    state: boolean;
    message: string;
    reload: boolean;
  }) => {
    error.value = {
      state: value.state,
      message: value.message,
      reload: value.reload,
    };
  };

  const userInitDataAuth = () => {
    if (config.IS_REPLY) return userAuthPeply();
    else return userAuth();
  };
  const _init = () => (loading.value = true);
  fetchRegionsData('index').then((response) => {
    if (response?.data.result) {
      data.initRegions(response.data.data);

      userInitDataAuth().then((response) => {
        if (response?.data.result) {
          user.value = response.data.data;
          fetchUserData('get', { id: user.value?.user.telegram_id }).then(
            (response) => {
              if (response?.data.result) {
                data.initUser(response.data.data);
                fetchBotData('products').then((response) => {
                  data.initProducts(response?.data);
                  loading.value = false;
                });
              } else {
                loading.value = false;
              }
            }
          );
        } else {
          createError({
            state: true,
            message: response?.data.message,
            reload: true,
          });
        }
      });
    } else {
      createError({
        state: true,
        message: response?.data.message,
        reload: true,
      });
    }
  });

  const getLoading = computed(() => loading.value);
  const getUser = computed(() => user.value);
  const errorHadler = computed(() => error.value);

  return {
    user,
    getLoading,
    errorHadler,
    getUser,
    createError,
    _init,
  };
});
