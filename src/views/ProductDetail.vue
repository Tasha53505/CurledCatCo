<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getProductById } from '@/stores/products'
import { useCart } from '@/composables/useCart'

const route = useRoute()
const router = useRouter()

const productId = computed(() => Number(route.params.id))
const product = computed(() => getProductById(productId.value))

const { addToCart } = useCart()
const handleAddToCart = () => {
  if (product.value) {
    addToCart(product.value)
  }
}

const goBack = () => {
  router.push({ name: 'Shop' })
}
</script>

<template>
  <div class="product-detail">
    <div class="container">
      <button class="back-button" @click="goBack">← Back to shop</button>

      <div v-if="product" class="product-detail-grid">
        <div class="image-wrapper">
          <img :src="product.image" :alt="product.name" />
        </div>

        <div class="info">
          <h1>{{ product.name }}</h1>
          <p class="description">{{ product.description }}</p>

          <div class="specs">
            <div><strong>Size:</strong> {{ product.size }}</div>
            <div>
              <strong>Jar:</strong>
              {{ product.jarColor.charAt(0).toUpperCase() + product.jarColor.slice(1) }}
            </div>
            <div><strong>Price:</strong> ${{ product.price }}</div>
          </div>

          <button class="add-to-cart" @click="handleAddToCart">Add to cart</button>
        </div>
      </div>

      <div v-else class="not-found">
        <h2>Product not found</h2>
        <p>We couldn't find that product. Try going back to the shop.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-detail {
  min-height: 100vh;
  padding: 3rem 0;
}

.back-button {
  background: none;
  border: 1px solid #000;
  padding: 0.5rem 1rem;
  cursor: pointer;
  margin-bottom: 2rem;
  font-size: 0.9rem;
}

.product-detail-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;
}

.image-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f5f5;
  border: 1px solid #e0e0e0;
  padding: 2rem;
}

.image-wrapper img {
  max-width: 100%;
  max-height: 560px;
  object-fit: contain;
}

.info h1 {
  margin-top: 0;
  font-size: 2.2rem;
}

.description {
  margin: 1.5rem 0;
  color: #555;
  line-height: 1.6;
}

.specs {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
  font-size: 0.95rem;
  color: #333;
}

.add-to-cart {
  background-color: #000;
  color: #fff;
  border: none;
  padding: 0.85rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s ease;
}

.add-to-cart:hover {
  background-color: #333;
}

.not-found {
  text-align: center;
  padding: 3rem;
}

@media (max-width: 1024px) {
  .product-detail-grid {
    grid-template-columns: 1fr;
  }

  .specs {
    grid-template-columns: 1fr;
  }
}
</style>
