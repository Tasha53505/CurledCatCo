import { ref, computed } from 'vue'

const cartItems = ref([])

export function useCart() {
  const addToCart = (product) => {
    const existingItem = cartItems.value.find(item => item.id === product.id)
    if (existingItem) {
      existingItem.quantity++
    } else {
      cartItems.value.push({
        ...product,
        quantity: 1,
      })
    }
  }

  const removeFromCart = (productId) => {
    cartItems.value = cartItems.value.filter(item => item.id !== productId)
  }

  const updateQuantity = (productId, quantity) => {
    const item = cartItems.value.find(item => item.id === productId)
    if (item) {
      item.quantity = Math.max(0, quantity)
    }
  }

  const cartTotal = computed(() => {
    return cartItems.value.reduce((total, item) => total + item.price * item.quantity, 0)
  })

  const cartItemCount = computed(() => {
    return cartItems.value.reduce((count, item) => count + item.quantity, 0)
  })

  const clearCart = () => {
    cartItems.value = []
  }

  return {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    cartTotal,
    cartItemCount,
    clearCart,
  }
}
