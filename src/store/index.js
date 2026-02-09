import { createStore } from 'vuex';

const store = createStore({
  state: {
    products: [],
    cart: [],
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    addToCart(state, product) {
      state.cart.push(product);
    },
    removeFromCart(state, productId) {
      state.cart = state.cart.filter(product => product.id !== productId);
    },
  },
  actions: {
    fetchProducts({ commit }) {
      // Fetch products from an API or local data
      // Example: commit('setProducts', fetchedProducts);
    },
    addProductToCart({ commit }, product) {
      commit('addToCart', product);
    },
    removeProductFromCart({ commit }, productId) {
      commit('removeFromCart', productId);
    },
  },
  getters: {
    allProducts(state) {
      return state.products;
    },
    cartItems(state) {
      return state.cart;
    },
    cartItemCount(state) {
      return state.cart.length;
    },
  },
});

export default store;