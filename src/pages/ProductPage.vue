<template>
  <div class="product-page">
    <ProductGallery :products="product" />
    <div class="product-details">
      <h1>{{ product.name }}</h1>
      <p>{{ product.description }}</p>
      <PawprintBadge />
      <button @click="addToCart">Add to Cart</button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useProducts } from '../composables/useProducts';
import ProductGallery from '../components/ProductGallery.vue';
import PawprintBadge from '../components/PawprintBadge.vue';

export default {
  components: {
    ProductGallery,
    PawprintBadge,
  },
  setup() {
    const { getProductById } = useProducts();
    const productId = ref(/* Get product ID from route params */);
    const product = ref(getProductById(productId.value));

    const addToCart = () => {
      // Implement Snipcart add to cart functionality
    };

    return {
      product,
      addToCart,
    };
  },
};
</script>

<style scoped>
.product-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.product-details {
  text-align: center;
}
</style>