<script setup>
import { useCart } from '@/composables/useCart'

defineProps({
  product: {
    type: Object,
    required: true,
  },
})

const { addToCart } = useCart()

const handleAddToCart = () => {
  addToCart(product)
}
</script>

<template>
  <div class="product-card">
    <div class="product-image-container">
      <img :src="product.image" :alt="product.name" class="product-image" />
      <div class="jar-mockup" :class="`jar-${product.jarColor}`">
        <div class="wax" :style="{ backgroundColor: product.waxColor }"></div>
        <div class="pawprint">🐾</div>
      </div>
    </div>
    <div class="product-info">
      <h3>{{ product.name }}</h3>
      <p class="product-description">{{ product.description }}</p>
      <div class="product-details">
        <span class="size">{{ product.size }}</span>
        <span class="jar-type">{{ product.jarColor.charAt(0).toUpperCase() + product.jarColor.slice(1) }} jar</span>
      </div>
      <div class="product-footer">
        <span class="price">${{ product.price }}</span>
        <button class="add-to-cart-btn" @click="handleAddToCart">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-card {
  background-color: #ffffff;
  border: 1px solid #000000;
  padding: 1.5rem;
  transition: all 0.3s ease;
}

.product-card:hover {
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  transform: translateY(-2px);
}

.product-image-container {
  position: relative;
  height: 420px;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  border: 1px solid #e0e0e0;
}

.product-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.jar-mockup {
  position: absolute;
  width: 160px;
  height: 220px;
  border: 2px solid #000000;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.jar-mockup.jar-black {
  background-color: #000000;
}

.jar-mockup.jar-white {
  background-color: #ffffff;
}

.jar-mockup.jar-clear {
  background-color: transparent;
  border: 2px dashed #000000;
}

.wax {
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pawprint {
  font-size: 2rem;
  position: absolute;
  top: 10px;
  right: 10px;
  opacity: 0.8;
}

.product-info {
  display: flex;
  flex-direction: column;
}

.product-info h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.product-description {
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 1rem;
  line-height: 1.5;
}

.product-details {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 0.85rem;
  color: #666;
}

.product-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid #e0e0e0;
}

.price {
  font-size: 1.5rem;
  font-weight: 700;
}

.add-to-cart-btn {
  background-color: #000000;
  color: #ffffff;
  padding: 0.6rem 1.2rem;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.add-to-cart-btn:hover {
  background-color: #333333;
  transform: scale(1.05);
}

.add-to-cart-btn:active {
  transform: scale(0.98);
}

@media (max-width: 768px) {
  .product-image-container {
    height: 320px;
  }

  .jar-mockup {
    width: 140px;
    height: 200px;
  }

  .product-info h3 {
    font-size: 1.25rem;
  }
}
</style>
