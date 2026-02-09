<script setup>
import { RouterLink } from 'vue-router'
import { useCart } from '@/composables/useCart'

const { cartItemCount } = useCart()
</script>

<template>
  <header class="header">
    <div class="container">
      <nav class="navbar">
        <RouterLink to="/" class="logo">
          <span class="logo-text">Curled Cat Co</span>
        </RouterLink>
        <ul class="nav-links">
          <li><RouterLink to="/">Home</RouterLink></li>
          <li><RouterLink to="/shop">Shop</RouterLink></li>
          <li><RouterLink to="/about">About</RouterLink></li>
          <li><RouterLink to="/contact">Contact</RouterLink></li>
          <li>
            <RouterLink to="/cart" class="cart-link">
              Cart
              <span v-if="cartItemCount > 0" class="cart-badge">{{ cartItemCount }}</span>
            </RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  border-bottom: 1px solid #000000;
  padding: 1.5rem 0;
  background-color: #ffffff;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
}

.logo-text {
  font-family: 'Abril Fatface', serif;
  font-size: 1.75rem;
  letter-spacing: 1px;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 2rem;
  align-items: center;
}

.nav-links a {
  font-weight: 500;
  position: relative;
  transition: opacity 0.3s ease;
}

.nav-links a:hover {
  opacity: 0.7;
}

.cart-link {
  position: relative;
}

.cart-badge {
  position: absolute;
  top: -8px;
  right: -12px;
  background-color: #000000;
  color: #ffffff;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 700;
}

@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    gap: 1rem;
  }

  .nav-links {
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }

  .logo-text {
    font-size: 1.5rem;
  }
}
</style>
