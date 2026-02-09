<template>
  <div class="product-card">
    <img :src="product.image" alt="Candle Image" class="product-image" />
    <h3 class="product-title">{{ product.title }}</h3>
    <p class="product-description">{{ product.description }}</p>
    <div class="product-price">{{ product.price | currency }}</div>
    <button class="buy-button" @click="addToCart">Buy Now</button>
    <PawprintBadge v-if="product.hasPawprint" />
  </div>
</template>

<script>
import PawprintBadge from './PawprintBadge.vue';

export default {
  components: {
    PawprintBadge,
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    addToCart() {
      // Logic to add the product to the cart using Snipcart
      this.$snipcart.addItem(this.product.id, this.product.title, this.product.price, this.product.image);
    },
  },
  filters: {
    currency(value) {
      return `$${parseFloat(value).toFixed(2)}`;
    },
  },
};
</script>

<style scoped>
.product-card {
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  transition: box-shadow 0.3s;
}

.product-card:hover {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.product-image {
  max-width: 100%;
  height: auto;
}

.product-title {
  font-size: 1.5em;
  margin: 0.5em 0;
}

.product-description {
  font-size: 1em;
  color: #666;
}

.product-price {
  font-size: 1.2em;
  color: #333;
  margin: 0.5em 0;
}

.buy-button {
  background-color: black;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.buy-button:hover {
  background-color: #333;
}
</style>