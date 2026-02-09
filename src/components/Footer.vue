<template>
  <footer class="footer">
    <div class="footer-content">
      <p>&copy; {{ currentYear }} Curled Cat Co. All rights reserved.</p>
      <nav>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/collection">Collection</router-link></li>
          <li><router-link to="/about">About</router-link></li>
        </ul>
      </nav>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
.footer {
  background-color: #000;
  color: #fff;
  padding: 20px;
  text-align: center;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
}

.footer nav ul {
  list-style: none;
  padding: 0;
}

.footer nav ul li {
  display: inline;
  margin: 0 15px;
}

.footer nav ul li a {
  color: #fff;
  text-decoration: none;
}
</style>