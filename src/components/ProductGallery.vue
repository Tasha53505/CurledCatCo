<template>
  <div class="product-gallery">
    <h2>Our Candles</h2>
    <div class="gallery-grid">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue';
import { ref } from 'vue';
import { useProducts } from '../composables/useProducts';

export default {
  components: {
    ProductCard,
  },
  setup() {
    const { products } = useProducts();
    return { products };
  },
};
</script>

<style scoped>
.product-gallery {
  padding: 20px;
  text-align: center;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}
</style>