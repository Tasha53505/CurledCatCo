<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Curled Cat Co</h1>
        <p class="hero-tagline">Handcrafted Candles for Cat Lovers</p>
        <p class="hero-description">
          Each candle is lovingly made with quality wax, hand-painted with a pawprint, and named after our feline
          friends. Experience the art of slow living.
        </p>
        <RouterLink to="/shop" class="cta-button">Shop Now</RouterLink>
      </div>
    </section>

    <!-- About Preview -->
    <section class="about-preview py-3">
      <div class="container">
        <h2 class="text-center">Our Story</h2>
        <p class="preview-text">
          I fell in love with candles when I visited my fiancé in the USA. I became obsessed with Bath and Body Works
          candles, but found the costs were adding up and they didn't have all the scents I wanted. I thought, why not
          make my own and share them with fellow cat lovers like me?
        </p>
        <p class="preview-text">
          Every Curled Cat Co candle is a labor of love. Our logo was drawn based on my cat, Norman. I'm constantly
          thinking of new scent ideas, designs, and cat-inspired names. Each candle is hand-poured and finished with a
          unique pawprint on top.
        </p>
        <RouterLink to="/about" class="read-more-link">Read Full Story →</RouterLink>
      </div>
    </section>

    <!-- Featured Products -->
    <section class="featured-products py-3">
      <div class="container">
        <h2 class="text-center">Featured Collection</h2>
        <p class="featured-description text-center">
          Discover our signature scents, each with a story as unique as your favorite feline.
        </p>
        <div class="products-grid">
          <div class="product-preview">
            <div class="featured-image black-jar"></div>
            <h3>Idle Hours</h3>
            <p>For moments of pure relaxation</p>
            <p class="featured-price">$12</p>
          </div>
          <div class="product-preview">
            <div class="featured-image black-jar"></div>
            <h3>Idle Hours</h3>
            <p>For moments of pure relaxation</p>
            <p class="featured-price">$12</p>
          </div>
          <div class="product-preview">
            <div class="featured-image black-jar"></div>
            <h3>Idle Hours</h3>
            <p>For moments of pure relaxation</p>
            <p class="featured-price">$12</p>
          </div>
        </div>
        <div class="text-center mt-3">
          <RouterLink to="/shop" class="explore-button">Explore Full Shop</RouterLink>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="why-us py-3">
      <div class="container">
        <h2 class="text-center mb-3">Why Curled Cat Co</h2>
        <div class="features">
          <div class="feature">
            <div class="feature-icon">✋</div>
            <h3>Hand-Poured</h3>
            <p>Each candle is poured with care and attention to detail.</p>
          </div>
          <div class="feature">
            <div class="feature-icon">🐾</div>
            <h3>Hand-Painted Pawprints</h3>
            <p>Every candle top features a unique hand-painted pawprint design.</p>
          </div>
          <div class="feature">
            <div class="feature-icon">🎨</div>
            <h3>Colorful Wax</h3>
            <p>Our signature colorful wax makes each candle a beautiful piece of art.</p>
          </div>
          <div class="feature">
            <div class="feature-icon">🐱</div>
            <h3>Cat-Inspired</h3>
            <p>All our candles are named after our feline friends and their quirky personalities.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero {
  background: linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%);
  padding: 6rem 2rem;
  text-align: center;
  border-bottom: 1px solid #000000;
}

.hero-content h1 {
  font-size: 4rem;
  margin-bottom: 1rem;
  font-family: 'Abril Fatface', serif;
}

.hero-tagline {
  font-size: 1.5rem;
  color: #555;
  margin-bottom: 1.5rem;
}

.hero-description {
  font-size: 1.1rem;
  max-width: 600px;
  margin: 1.5rem auto;
  color: #666;
  line-height: 1.8;
}

.cta-button {
  display: inline-block;
  background-color: #000000;
  color: #ffffff;
  padding: 1rem 2.5rem;
  font-weight: 600;
  font-size: 1.1rem;
  margin-top: 1.5rem;
  transition: all 0.3s ease;
}

.cta-button:hover {
  background-color: #333333;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.about-preview {
  background-color: #ffffff;
}

.preview-text {
  font-size: 1rem;
  line-height: 1.8;
  color: #333;
  max-width: 700px;
  margin: 0 auto 1.5rem;
}

.read-more-link {
  display: inline-block;
  color: #000000;
  font-weight: 600;
  text-decoration: underline;
  margin-top: 1rem;
  transition: opacity 0.3s ease;
}

.read-more-link:hover {
  opacity: 0.7;
}

.featured-products {
  background-color: #ffffff;
}

.featured-products h2 {
  margin-bottom: 0.5rem;
}

.featured-description {
  color: #666;
  margin-bottom: 2.5rem;
  font-size: 1.05rem;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 2rem;
}

.product-preview {
  text-align: center;
  padding: 2rem;
  border: 1px solid #e0e0e0;
  transition: all 0.3s ease;
}

.product-preview:hover {
  border-color: #000000;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.featured-image {
  width: 150px;
  height: 150px;
  margin: 0 auto 1.5rem;
  border: 2px solid #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
}

.featured-image.black-jar {
  background-color: #000000;
  color: #ffffff;
}

.featured-image.white-jar {
  background-color: #ffffff;
  color: #000000;
}

.product-preview h3 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

.product-preview p {
  color: #666;
  margin-bottom: 0.5rem;
}

.featured-price {
  font-weight: 700;
  font-size: 1.25rem;
  margin-top: 1rem;
}

.explore-button {
  display: inline-block;
  background-color: #000000;
  color: #ffffff;
  padding: 0.8rem 2rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.explore-button:hover {
  background-color: #333333;
}

.why-us {
  background-color: #f9f9f9;
}

.features {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.feature {
  text-align: center;
  padding: 1.5rem;
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.feature h3 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

.feature p {
  color: #666;
  font-size: 0.95rem;
}

@media (max-width: 1024px) {
  .features {
    grid-template-columns: repeat(2, 1fr);
  }

  .products-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2.5rem;
  }

  .hero-tagline {
    font-size: 1.2rem;
  }

  .features {
    grid-template-columns: 1fr;
  }

  .products-grid {
    grid-template-columns: 1fr;
  }
}
</style>
