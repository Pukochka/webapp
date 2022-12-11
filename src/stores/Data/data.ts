import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { Regions, UserRegionProducts, User, Products } from 'src/types';

export const useDataStore = defineStore('data', () => {
  const region = ref<Regions[]>([]);
  const user = ref<User>();
  const all_products = ref<UserRegionProducts[]>();
  const products = ref<Products[]>();

  const getRegions = computed(() => region.value);
  const getUser = computed(() => user.value);
  const getProducts = computed(() => products.value);

  const initRegions = (regions: Regions[]) => {
    region.value = regions;
  };

  const initProducts = (value: UserRegionProducts[]) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    products.value = value[getUser.value?.region];
    all_products.value = value;
  };
  const changeProducts = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    products.value = all_products.value[getUser.value?.region];
  };

  const initUser = (value: User) => {
    user.value = value;
  };

  const getRegionText = computed(() => {
    let desc = 'Регион';
    for (const item of region.value) {
      if (item?.new_code === user.value?.region) {
        desc = item.desc.slice(0, 11) + '...';
      }
    }
    return desc;
  });

  return {
    getRegions,
    getProducts,
    getUser,
    getRegionText,
    initRegions,
    initProducts,
    initUser,
    changeProducts,
  };
});
