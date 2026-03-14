<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="about">
    <div class="about-header">
      <div class="container">
        <h1>About Curled Cat Co.</h1>
      </div>
    </div>

    <div class="container about-content">
    
      <section class="what-makes-us-special">
        <h2>What Makes Us Special</h2>
        <div class="special-features">
          <div class="feature-card">
            <div class="feature-number">1</div>
            <h3>Hand-Poured Wax</h3>
            <p>
              Each candle is carefully poured by hand, ensuring quality and consistency in every
              batch.
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-number">2</div>
            <h3>Unique Wax Colours</h3>
            <p>
              Our signature colored wax is what sets us apart. Each candle features a different,
              vibrant wax color.
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-number">3</div>
            <h3>Hand-Painted Pawprints</h3>
            <p>
              Every single candle is finished with our signature hand-painted pawprint on top: no
              two are exactly alike.
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-number">4</div>
            <h3>Cat-Inspired Names</h3>
            <p>
              All our candles have cat-inspired names that reflect their personality or cat related
              ideas, making them fun and unique gifts for cat lovers.
            </p>
          </div>
        </div>
      </section>

      <section class="jar-design">
        <h2>Jar & Label Design</h2>
        <p>
          We believe in simplicity and elegance. Our candles come in three jar Colours: black,
          white, and clear. To make them pop, we use inverted label Colours: so a black jar has a
          white label, and vice versa. Because the jars and labels are so clean and minimal, the wax
          colours becomes a fun burst of personality, giving each candle a sleek, modern look with a
          playful pop of color.
        </p>
      </section>

      <section class="philosophy">
        <h2>Our Philosophy</h2>
        <p>
          At Curled Cat Co, we're obsessed with the details. From thinking of new scent ideas and
          unique cat names to designing labels and hand-painting each pawprint, every aspect of our
          candles is a labour of love.
        </p>
        <p>
          We want our customers to feel the care and passion that goes into each candle. Whether
          you're a cat lover, candle enthusiast, or someone looking for a meaningful gift, we
          believe there's a Curled Cat Co. candle for you.
        </p>
      </section>

        <section class="story-section" id="myStory">
        <h2>My Story</h2>
       Hi ! I'm Tasha, the creator of Curled Cat Co.  <br> <br>
      My love for candles started when I visited my fiancé Justin, in the USA. I quickly became obsessed with them 
      the cozy glow, the beautiful jars, and especially the incredible scents. But after buying a few, I ran into a problem many candle lovers know too well: some looked amazing and smelled great before you lit them, but once you lit them… barely any scent at all. That was such a letdown.
      As someone who loves art, works in tech, and is completely obsessed with cats, I decided to start making my own 
      candles. <br> <br>
      
      My goal with Curled Cat Co. is simple: create sleek, modern candles inspired by our love of cats, 
      while making sure they actually fill your room with delicious fragrance when you light them.
      Candle making has become a creative journey I genuinely love, and I'm so excited to share it with fellow cat lovers.
      <br> <br>

          <p class="preview-text">
          Every Curled Cat Co. candle is a labor of love. Our logo was drawn based on my cat, Norman.
          I'm constantly thinking of new scent ideas, designs, and cat-inspired names. Each candle
          is hand-poured and finished with a unique handcrafted pawprint on top.
        </p>
        
        <p>
          I didn't dive head first into making candles. I did 5 months of intense research before I
          even MADE my first candle. I wanted to understand everything I could before I started. I
          studied the different waxes, jars, and wick types (LX, CDN, etc.), hot and cold throw
          performance (How strong the scent is when a candle is lit and how strong a scent is from
          an unlit candle), How wax pools work and what is the ideal melting poolp per hour,
          fragrance quality and load percentages, vessel diameters, environmental factors (like
          airflow or room size affecting hot throw), as well as many common issues I've seen in the
          community: i.e sinkholes, mushrooming, tunneling, airbubbles,and frosting and how to avoid
          / fix them.
        </p>
      </section>

      <section class="cta-section">
        <!-- <h2>Ready to Light Up Your Home?</h2> -->
        <h2>Want To See Our Candles?</h2>
        <RouterLink to="/shop" class="shop-button">View Our Collection</RouterLink>
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
