<template>
  <div class="home">
    <header-component />
    <main>
      <h1>Welcome to Curled Cat Co</h1>
      <p>Discover our unique hand-painted candles, each with a special pawprint on top.</p>
      <product-gallery />
    </main>
    <footer-component />
  </div>
</template>

<script>
import HeaderComponent from '../components/Header.vue';
import FooterComponent from '../components/Footer.vue';
import ProductGallery from '../components/ProductGallery.vue';

export default {
  components: {
    HeaderComponent,
    FooterComponent,
    ProductGallery
  }
}
</script>

<style scoped>
.home {
  text-align: center;
  padding: 20px;
  background-color: white;
  color: black;
}
</style>