<script setup>
import ProductCard from '@/components/ProductCard.vue'
import { ref } from 'vue'
import { products } from '@/stores/products'

</script>

<template >
  <div class="shop">
    <div class="shop-header">
      <div class="container">
        <h1>Curled Cat Co. Candle Collection</h1>
        <p>Discover our collection of handcrafted candles, each with its own unique story.</p>
      </div>
    </div>

    <div class="container shop-content">
      <div class="">
        <h2>Shop Not Available Yet 🐈‍⬛</h2>
        <p>
          As my business has not launched yet and this site serves purely as a showcase of my work,
          buying my candles is not available yet. My work may not be copied, stolen, or referenced.
        </p>
      </div>

 <div class="products-section">
        <h2>All Candles</h2>

        <div class="products-grid">

          <template
            v-for="product in products"
            :key="product.id"
          >

            <!-- Active Products -->
            <RouterLink
              v-if="product.status === 'active'"
              :to="{ name: 'Product', params: { id: product.id } }"
              class="product-link"
            >
              <div class="product-card">
                <img
                  v-if="product.media?.length"
                  :src="product.media[0].src"
                  :alt="product.name"
                />

                <h3>{{ product.name }}</h3>

                <p class="scent-description">
                  {{ product.scentDescription }}
                </p>
              </div>
            </RouterLink>

            <!-- Coming Soon -->
            <div
              v-else
              class="product-link coming-soon"
            >
              <div class="product-card">
                <img
                  v-if="product.media?.length"
                  :src="product.media[0].src"
                  :alt="product.name"
                />

                <h3>{{ product.name }}</h3>

                <p class="scent-description">
                  {{ product.scentDescription }}
                </p>
              </div>
            </div>

          </template>

        </div>
      

    </div>

  </div>
  </div>
</template>




      <!-- <div class="carousel">
        <button class="carousel-nav prev" type="button" @click="prev">‹</button>
        <div class="carousel-track">
          <div
            v-for="(product, index) in products"
            :key="product.id"
            class="carousel-item"
            :class="{ active: index === currentIndex }"
          >
            <img :src="product.image" :alt="product.name" @click="openModal(product)" />
            <div class="carousel-caption">{{ product.name }}</div>
          </div>
        </div>
        <button class="carousel-nav next" type="button" @click="next">›</button>
      </div> -->

  

      <!-- <div
        v-if="modalOpen"
        class="modal"
        @click.self="closeModal"
        @keydown.escape.window="closeModal"
      >
        <div class="modal-content">
          <button class="modal-close" type="button" @click="closeModal">×</button>
          <img :src="modalProduct?.image" :alt="modalProduct?.name" />
          <div class="modal-caption">{{ modalProduct?.name }}</div>
        </div>
      </div> -->

    <!-- <div class="filters">
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
          <router-link
            v-for="product in products"
            :key="product.id"
            :to="{ name: 'Product', params: { id: product.id } }"
            class="product-link"
          >
            <ProductCard :product="product" />
          </router-link>
        </div>
      </div> -->

      
<style scoped>


.scent-description {
  font-size: 0.9rem;
  color: #666;
  margin-top: 0.4rem;
  line-height: 1.4;
}

.product-card {
  border: 1px solid #e0e0e0;
  padding: 1.5rem;
  text-align: center;
  background: #fff;
  transition: all 0.25s ease;
}

.product-card:hover {
  border-color: #000;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

.product-card img {
  width: 100%;
  max-height: 220px;
  object-fit: contain;
  background: #fff;
  border: 1px solid #e0e0e0;
  padding: 1rem;
  margin-bottom: 1rem;
}
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
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.product-link {
  text-decoration: none;
  color: inherit;
}

@media (max-width: 1024px) {
  .products-grid {
    grid-template-columns: 1fr;
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

.coming-soon {
  opacity: 0.6;
  cursor: not-allowed;
}

.coming-soon h2 {
  font-size: 2.4rem;
  margin-bottom: 0.5rem;
}

.coming-soon p {
  font-size: 1.1rem;
  color: #555;
}
/* Carousel */
.carousel {
  position: relative;
  margin: 2rem 0 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel-track {
  width: 100%;
  max-width: 960px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  position: relative;
}

.carousel-item {
  flex: 0 0 260px;
  opacity: 0.3;
  transform: scale(0.95);
  transition: all 0.3s ease;
  text-align: center;
  margin: 0 0.75rem;
  pointer-events: none;
}

.carousel-item.active {
  opacity: 1;
  transform: scale(1);
  pointer-events: auto;
}

.carousel-item img {
  display: block;
  width: 100%;
  height: 240px;
  object-fit: contain;
  border: 1px solid #e0e0e0;
  background: #fff;
  padding: 1rem;
}

.carousel-caption {
  margin-top: 0.75rem;
  font-weight: 600;
  color: #333;
}

.carousel-nav {
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 999px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
}

.carousel-nav.prev {
  left: -20px;
}

.carousel-nav.next {
  right: -20px;
}

@media (max-width: 768px) {
  .carousel {
    padding: 0 1rem;
  }

  .carousel-item {
    flex: 0 0 220px;
  }

  .carousel-nav {
    width: 34px;
    height: 34px;
  }
}

.carousel-item img {
  cursor: pointer;
}

.modal {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  z-index: 100;
}

.modal-content {
  position: relative;
  max-width: 720px;
  width: 100%;
  background: #fff;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 14px 40px rgba(0, 0, 0, 0.25);
  text-align: center;
}

.modal-close {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  background: transparent;
  border: none;
  font-size: 1.8rem;
  cursor: pointer;
  line-height: 1;
}

.modal-content img {
  width: 100%;
  height: auto;
  max-height: 70vh;
  object-fit: contain;
  border: 1px solid #e0e0e0;
  background: #fff;
}

.modal-caption {
  margin-top: 1rem;
  font-weight: 700;
  color: #333;
}
</style>
