<template>
  <div class="collection">
    <h1>Our Candle Collection</h1>
    <ProductGallery :products="products" />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useProducts } from '../composables/useProducts';

export default {
  name: 'Collection',
  setup() {
    const { fetchProducts } = useProducts();
    const products = ref([]);

    onMounted(async () => {
      products.value = await fetchProducts();
    });

    return {
      products,
    };
  },
};
</script>

<style scoped>
.collection {
  padding: 20px;
  text-align: center;
}
</style>