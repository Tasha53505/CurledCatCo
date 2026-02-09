<script setup>
import { RouterLink } from 'vue-router'
import { useCart } from '@/composables/useCart'

const { cartItems, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart()
</script>

<template>
  <div class="cart">
    <div class="cart-header">
      <div class="container">
        <h1>Shopping Cart</h1>
      </div>
    </div>

    <div class="container cart-content">
      <div v-if="cartItems.length === 0" class="empty-cart">
        <p>Your cart is empty</p>
        <RouterLink to="/shop" class="continue-shopping">Continue Shopping →</RouterLink>
      </div>

      <div v-else class="cart-active">
        <div class="cart-items">
          <h2>Your Items</h2>
          <table class="cart-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in cartItems" :key="item.id">
                <td class="product-name">{{ item.name }}</td>
                <td>${{ item.price }}</td>
                <td>
                  <input
                    type="number"
                    :value="item.quantity"
                    min="1"
                    @change="e => updateQuantity(item.id, parseInt(e.target.value))"
                    class="quantity-input"
                  />
                </td>
                <td>${{ (item.price * item.quantity).toFixed(2) }}</td>
                <td>
                  <button
                    @click="removeFromCart(item.id)"
                    class="remove-btn"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="cart-summary">
          <h2>Order Summary</h2>
          <div class="summary-row">
            <span>Subtotal</span>
            <span>${{ cartTotal.toFixed(2) }}</span>
          </div>
          <div class="summary-row">
            <span>Shipping</span>
            <span>Calculated at checkout</span>
          </div>
          <div class="summary-row total">
            <span>Total</span>
            <span>${{ cartTotal.toFixed(2) }}</span>
          </div>

          <button class="checkout-button">
            Proceed to Checkout via Snipcart
          </button>

          <button @click="clearCart" class="clear-cart-btn">
            Clear Cart
          </button>

          <RouterLink to="/shop" class="continue-shopping-link">
            ← Continue Shopping
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cart {
  min-height: 100vh;
}

.cart-header {
  background-color: #f5f5f5;
  padding: 3rem 0;
  border-bottom: 1px solid #000000;
}

.cart-header h1 {
  font-size: 3rem;
}

.cart-content {
  padding: 3rem 0;
}

.empty-cart {
  text-align: center;
  padding: 3rem;
}

.empty-cart p {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 1.5rem;
}

.continue-shopping {
  display: inline-block;
  background-color: #000000;
  color: #ffffff;
  padding: 0.8rem 2rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.continue-shopping:hover {
  background-color: #333333;
}

.cart-active {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
}

.cart-items h2,
.cart-summary h2 {
  margin-bottom: 1.5rem;
}

.cart-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1rem;
}

.cart-table thead {
  background-color: #f5f5f5;
  border-bottom: 2px solid #000000;
}

.cart-table th {
  padding: 1rem;
  text-align: left;
  font-weight: 600;
}

.cart-table td {
  padding: 1rem;
  border-bottom: 1px solid #e0e0e0;
}

.product-name {
  font-weight: 500;
}

.quantity-input {
  width: 60px;
  padding: 0.4rem;
  border: 1px solid #e0e0e0;
  font-family: 'Montserrat', sans-serif;
}

.quantity-input:focus {
  outline: none;
  border-color: #000000;
}

.remove-btn {
  background-color: #ffffff;
  color: #000000;
  border: 1px solid #000000;
  padding: 0.4rem 0.8rem;
  font-size: 0.85rem;
  transition: all 0.3s ease;
}

.remove-btn:hover {
  background-color: #000000;
  color: #ffffff;
}

.cart-summary {
  background-color: #f9f9f9;
  padding: 2rem;
  border: 1px solid #e0e0e0;
  height: fit-content;
  position: sticky;
  top: 20px;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  color: #666;
}

.summary-row.total {
  font-weight: 700;
  font-size: 1.2rem;
  color: #000000;
  padding-top: 1rem;
  border-top: 2px solid #000000;
  margin-bottom: 1.5rem;
}

.checkout-button {
  width: 100%;
  background-color: #000000;
  color: #ffffff;
  padding: 1rem;
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  transition: all 0.3s ease;
}

.checkout-button:hover {
  background-color: #333333;
}

.clear-cart-btn {
  width: 100%;
  background-color: #ffffff;
  color: #000000;
  border: 1px solid #000000;
  padding: 0.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
}

.clear-cart-btn:hover {
  background-color: #000000;
  color: #ffffff;
}

.continue-shopping-link {
  display: block;
  text-align: center;
  color: #000000;
  text-decoration: underline;
  font-weight: 600;
  margin-top: 1rem;
  transition: opacity 0.3s ease;
}

.continue-shopping-link:hover {
  opacity: 0.7;
}

@media (max-width: 968px) {
  .cart-active {
    grid-template-columns: 1fr;
  }

  .cart-summary {
    position: static;
  }
}

@media (max-width: 768px) {
  .cart-header h1 {
    font-size: 2rem;
  }

  .cart-table {
    font-size: 0.9rem;
  }

  .cart-table th,
  .cart-table td {
    padding: 0.5rem;
  }
}
</style>
