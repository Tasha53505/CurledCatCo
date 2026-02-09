<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="about">
    <div class="about-header">
      <div class="container">
        <h1>About Curled Cat Co</h1>
      </div>
    </div>

    <div class="container about-content">
      <section class="story-section">
        <h2>Our Story</h2>
        <p>
          I fell in love with candles when I went to visit my fiancé in the USA. I became obsessed with Bath and Body
          Works candles, but found that the costs were adding up and they didn't have all the scents I wanted. I thought
          to myself: why not make my own candles and sell them to people? This way, I could share unique scents with
          fellow cat lovers like me.
        </p>
        <p>
          The idea of Curled Cat Co was born from my passion for candles and my love for cats. I wanted to create
          something special that celebrated both. Our logo was hand-drawn based on my own cat, Norman, who inspired the
          whole journey.
        </p>
      </section>

      <section class="what-makes-us-special">
        <h2>What Makes Us Special</h2>
        <div class="special-features">
          <div class="feature-card">
            <div class="feature-number">1</div>
            <h3>Hand-Poured Wax</h3>
            <p>Each candle is carefully poured by hand, ensuring quality and consistency in every batch.</p>
          </div>
          <div class="feature-card">
            <div class="feature-number">2</div>
            <h3>Unique Wax Colors</h3>
            <p>Our signature colored wax is what sets us apart. Each candle features a different, vibrant wax color.</p>
          </div>
          <div class="feature-card">
            <div class="feature-number">3</div>
            <h3>Hand-Painted Pawprints</h3>
            <p>Every single candle is finished with a hand-painted pawprint on top. No two are exactly alike.</p>
          </div>
          <div class="feature-card">
            <div class="feature-number">4</div>
            <h3>Cat-Inspired Names</h3>
            <p>All our candles have cat-inspired names that reflect their personality and scent profile.</p>
          </div>
        </div>
      </section>

      <section class="jar-design">
        <h2>Jar & Label Design</h2>
        <p>
          We believe in simplicity and elegance. Our candles come in three jar colors: black, white, and clear. To make
          them pop, we use inverted label colors—so a black jar has a white label, and vice versa. This creates a
          striking, modern look that's perfect for any home.
        </p>
      </section>

      <section class="philosophy">
        <h2>Our Philosophy</h2>
        <p>
          At Curled Cat Co, we're obsessed with the details. From thinking of new scent ideas and unique cat names to
          designing labels and hand-painting each pawprint, every aspect of our candles is a labor of love.
        </p>
        <p>
          We want our customers to feel the care and passion that goes into each candle. Whether you're a cat lover,
          candle enthusiast, or someone looking for a meaningful gift, we believe there's a Curled Cat Co candle for
          you.
        </p>
      </section>

      <section class="cta-section">
        <h2>Ready to Light Up Your Home?</h2>
        <RouterLink to="/shop" class="shop-button">Shop Our Collection</RouterLink>
      </section>
    </div>
  </div>
</template>

<style scoped>
.about {
  min-height: 100vh;
}

.about-header {
  background-color: #f5f5f5;
  padding: 3rem 0;
  border-bottom: 1px solid #000000;
}

.about-header h1 {
  font-size: 3rem;
}

.about-content {
  padding: 3rem 0;
  max-width: 800px;
}

section {
  margin-bottom: 3rem;
}

section h2 {
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #000000;
}

section p {
  font-size: 1.05rem;
  line-height: 1.8;
  color: #333;
  margin-bottom: 1rem;
}

.special-features {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.feature-card {
  padding: 2rem;
  border: 1px solid #e0e0e0;
  text-align: center;
}

.feature-number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: #000000;
  color: #ffffff;
  border-radius: 50%;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.feature-card h3 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

.feature-card p {
  color: #666;
  font-size: 0.95rem;
  margin-bottom: 0;
}

.cta-section {
  text-align: center;
  padding: 2rem;
  background-color: #f5f5f5;
  margin-top: 3rem;
}

.cta-section h2 {
  border: none;
  padding: 0;
}

.shop-button {
  display: inline-block;
  background-color: #000000;
  color: #ffffff;
  padding: 1rem 2.5rem;
  font-weight: 600;
  font-size: 1rem;
  margin-top: 1.5rem;
  transition: all 0.3s ease;
}

.shop-button:hover {
  background-color: #333333;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .about-header h1 {
    font-size: 2rem;
  }

  .special-features {
    grid-template-columns: 1fr;
  }

  .about-content {
    padding: 1.5rem 0;
  }
}
</style>
