import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { Products, Items, Regions } from 'src/types';

export const useMainStore = defineStore('main', () => {
  const template = ref<'auth' | 'catalog' | 'products'>('auth');
  const template_text = ref<string>('Каталог');
  const select_product = ref<Products>();
  const select_item = ref<Items>();

  const change_region = ref({ state: false, region: { new_code: '' } });
  const product_menu = ref<boolean>(false);

  const selectProduct = (product: Products) => (select_product.value = product);
  const selectItem = (item: Items) => (select_item.value = item);
  const changeStateMenu = () => (product_menu.value = !product_menu.value);
  const changeStateChangeRegion = (
    region: Regions | { new_code: '' },
    state: boolean
  ) => (change_region.value = { state: state, region: region });

  const changeTemplate = (
    value: 'auth' | 'catalog' | 'products',
    category?: Products
  ) => {
    if (category) selectProduct(category);
    template.value = value;
    if (template.value === 'catalog') template_text.value = 'Каталог';
    else {
      template_text.value = `${category?.range[0]}-${category?.range[1]} баллов`;
    }
  };

  const getTemplate = computed(() => template.value);
  const getChangeRegion = computed(() => change_region.value);
  const getTemplateText = computed(() => template_text.value);
  const getSelectProduct = computed(() => select_product.value);
  const getSelectItem = computed(() => select_item.value);
  const getProductMenu = computed(() => product_menu.value);

  return {
    getTemplate,
    getTemplateText,
    getSelectProduct,
    getSelectItem,
    getProductMenu,
    getChangeRegion,
    changeTemplate,
    selectProduct,
    selectItem,
    changeStateMenu,
    changeStateChangeRegion,
  };
});
