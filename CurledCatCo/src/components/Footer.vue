<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h4>Curled Cat Co</h4>
          <p>Handcrafted candles inspired by our feline friends. Each candle is lovingly made with quality wax and brushed with a hand-painted pawprint.</p>
        </div>
        <div class="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><RouterLink to="/">Home</RouterLink></li>
            <li><RouterLink to="/shop">Shop</RouterLink></li>
            <li><RouterLink to="/about">About</RouterLink></li>
            <li><RouterLink to="/contact">Contact</RouterLink></li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>Contact</h4>
          <p>Email: hello@curledcatco.com</p>
          <p>Follow us on social media for new scent releases and cat content!</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2026 Curled Cat Co. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #000000;
  color: #ffffff;
  padding: 3rem 0 1rem;
  margin-top: 5rem;
  border-top: 1px solid #666;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section h4 {
  color: #ffffff;
  margin-bottom: 1rem;
}

.footer-section p {
  font-size: 0.95rem;
  line-height: 1.6;
}

.footer-section ul {
  list-style: none;
}

.footer-section ul li {
  margin-bottom: 0.5rem;
}

.footer-section a {
  color: #cccccc;
  transition: color 0.3s ease;
}

.footer-section a:hover {
  color: #ffffff;
}

.footer-bottom {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid #333;
  color: #999;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .footer-section h4 {
    font-size: 1.25rem;
  }
}
</style>
