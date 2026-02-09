<template>
  <div class="pawprint-badge">
    <span class="pawprint">🐾</span>
  </div>
</template>

<script>
export default {
  name: 'PawprintBadge',
}
</script>

<style scoped>
.pawprint-badge {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: white; /* Adjust based on your design */
  border-radius: 50%;
  border: 2px solid black; /* Adjust based on your design */
}

.pawprint {
  font-size: 24px; /* Adjust size as needed */
}
</style>