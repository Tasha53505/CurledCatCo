<script setup>
import { RouterLink } from 'vue-router'
import { products } from '@/stores/products'
</script>

<template>
  <div class="home">

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Curled Cat Co.</h1>
        <p class="hero-tagline">Handcrafted Candles for Cat Lovers</p>
        <p class="hero-description">
          Every candle is poured with care, finished with a hand-painted pawprint, and inspired by
          the unique charm of our kitty friends. Bring a touch of calm and cozy luxury to your space
          and every candle invites you to slow down, unwind, and enjoy the little moments in life.
        </p>

        <RouterLink
          :to="{ path: '/', hash: '#featuredCollection' }"
          class="cta-button"
        >
          View Curled Cat Co. Candle Collection
        </RouterLink>
      </div>
    </section>

    <!-- About Preview -->
    <section class="about-preview py-3">
      <div class="container">
        <h2 class="text-center">My Story</h2>

        <p class="preview-text">
          Hi! I'm Tasha, the creator of Curled Cat Co.
          <br><br>
My love for candles started when I visited my fiancé, in the USA.
 I quickly became obsessed with them ! The pretty, soft glow, the beautiful jars, and most importantly the incredible scents. 
 But after buying a few, I ran into a problem many of us know too well: some looked amazing and smelled great before you lit them, but once you lit them… barely any scent at all.
  That was such a letdown. As someone who loves Candles, art, works in tech, and is completely obsessed with cats, I decided I wanted to start making my own candles.  <br> <br> 
  Candle making has become a creative journey I genuinely love, and I'm so excited to share it with fellow cat lovers.     
   </p>

        <RouterLink
          :to="{ path: '/about', hash: '#myStory' }"
          class="read-more-link"
        >
          Read Full Story →
        </RouterLink>
      </div>
    </section>
<!-- Featured Products -->
    <section class="featured-products py-3">
      <div class="container">
        <h2 class="text-center" id="featuredCollection">
          Featured Collection
        </h2>

        <p class="featured-description text-center">
          Discover our signature scents, each with a story as unique as your favorite feline.
        </p>

        <div class="products-grid">

          <template
            v-for="product in products.slice(0, 3)"
            :key="product.id"
          >

            <!-- Active -->
            <RouterLink
              v-if="product.status === 'active'"
              :to="{ name: 'Product', params: { id: product.id } }"
              class="product-preview"
            >
              <div class="featured-image">
                <img
                  :src="product.media?.[0]?.src || product.image"
                  :alt="product.name"
                  class="preview-image"
                />

                <video
                  v-if="product.media?.find(m => m.type === 'video')"
                  :src="product.media.find(m => m.type === 'video').src"
                  class="preview-video"
                  muted
                  loop
                  autoplay
                  playsinline
                ></video>
              </div>

              <h3>{{ product.name }}</h3>
              <!-- <p class="scent-description">{{ product.scentDescription }}</p> -->

              <p>{{ product.description }}</p>

              <p v-if="product.price" class="featured-price">
                ${{ product.price }}
              </p>
            </RouterLink>

            <!-- Coming Soon -->
            <div
              v-else
              class="product-preview coming-soon"
            >
              <div class="featured-image">
                <img
                  :src="product.media?.[0]?.src || product.image"
                  :alt="product.name"
                  class="preview-image"
                />
              </div>

              <h3>{{ product.name }}</h3>
              <p>{{ product.description }}</p>
            </div>

          </template>

        </div>

        <div class="text-center mt-3">
          <RouterLink to="/shop" class="explore-button">
            Explore Full Collection
          </RouterLink>
        </div>

      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="why-us py-3">
      <div class="container">
        <h2 class="text-center mb-3">Why Curled Cat Co.</h2>

        <div class="features">
          <div class="feature">
            <div class="feature-icon">🖐️</div>
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
            <div class="feature-icon">🐈‍⬛</div>
            <h3>Cat-Inspired</h3>
            <p>All our candles are named after our kitty friends and their quirky personalities.</p>
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
  width: 45vh;
  height: 45vh;
  margin: 0 auto 1.5rem;
  border: 2px solid #000000;
  position: relative;
  overflow: hidden;
}

.scent-description {
  font-size: 0.8rem;
  color: #666;
  margin-top: 0.4rem;
  line-height: 1.4;
}

.preview-image,
.preview-video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.preview-video {
  opacity: 0;
  transition: opacity 0.3s ease;
}

.coming-soon {
  opacity: 0.6;
  cursor: not-allowed;
  /* pointer-events: none; */
}


.featured-image:hover .preview-video {
  opacity: 1;
}



.featured-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
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
