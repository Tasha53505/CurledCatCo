<script setup>
import ProductCard from '@/components/ProductCard.vue'
import { products } from '@/stores/products'
</script>

<template>
  <div class="shop">
    <div class="shop-header">
      <div class="container">
        <h1>Our Shop</h1>
        <p>Discover our collection of handcrafted candles, each with its own unique story.</p>
      </div>
    </div>

    <div class="container shop-content">
      <div class="filters">
        <div class="filter-section">
          <h3>Jar Color</h3>
          <label>
            <input type="checkbox" />
            Black
          </label>
          <label>
            <input type="checkbox" />
            White
          </label>
          <label>
            <input type="checkbox" />
            Clear
          </label>
        </div>

        <div class="filter-section">
          <h3>Price Range</h3>
          <label>
            <input type="checkbox" />
            Under $10
          </label>
          <label>
            <input type="checkbox" />
            $10 - $20
          </label>
          <label>
            <input type="checkbox" />
            Over $20
          </label>
        </div>
      </div>

      <div class="products-section">
        <h2>All Products</h2>
        <div class="products-grid">
          <ProductCard v-for="product in products" :key="product.id" :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.shop {
  min-height: 100vh;
}

.shop-header {
  background-color: #f5f5f5;
  padding: 3rem 0;
  border-bottom: 1px solid #000000;
}

.shop-header h1 {
  font-size: 3rem;
  margin-bottom: 0.5rem;
}

.shop-header p {
  font-size: 1.1rem;
  color: #666;
}

.shop-content {
  padding: 3rem 0;
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 2rem;
}

.filters {
  background-color: #f9f9f9;
  padding: 2rem;
  height: fit-content;
  border: 1px solid #e0e0e0;
  position: sticky;
  top: 20px;
}

.filter-section {
  margin-bottom: 2rem;
}

.filter-section h3 {
  font-size: 1.1rem;
  margin-bottom: 1rem;
}

.filter-section label {
  display: block;
  margin-bottom: 0.5rem;
  cursor: pointer;
  user-select: none;
}

.filter-section input[type='checkbox'] {
  margin-right: 0.5rem;
  cursor: pointer;
}

.products-section h2 {
  margin-bottom: 2rem;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

@media (max-width: 1024px) {
  .products-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .shop-content {
    grid-template-columns: 1fr;
  }

  .filters {
    position: static;
  }
}

@media (max-width: 768px) {
  .shop-header h1 {
    font-size: 2rem;
  }

  .products-grid {
    grid-template-columns: 1fr;
  }

  .shop-content {
    padding: 1.5rem 0;
  }
}
</style>
