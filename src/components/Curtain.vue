<script setup>
import { ref } from 'vue'

const isVisible = ref(true)

const dismiss = () => {
  isVisible.value = false
}
</script>

<template>
  <transition name="curtain-fade">
    <div v-if="isVisible" class="curtain">
      <div class="curtain__content">
        <h1>Curled Cat Co.</h1>
        <p class="curtain__subtitle">
          This site is a work-in-progress while I perfect my candle making - nothing is for sale
          yet.
        </p>
        <p class="curtain__subtitle">
          <small>
            <strong>© 2026 Tasha Carr. All rights reserved. </strong> This site and its original
            content (ideas, designs, text, and images) were created by Tasha Carr as the sole
            originator. No reproduction, copying, or use without express written permission.</small
          >
        </p>

        <button class="curtain__button" @click="dismiss">Enter site</button>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.curtain {
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: radial-gradient(circle at top, rgba(255, 255, 255, 0.97), rgba(0, 0, 0, 0.75));
  color: #111;
  z-index: 9999;
  padding: 2rem;
}

.curtain__content {
  max-width: 480px;
  width: 100%;
  text-align: center;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  padding: 3rem 2rem;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.25);
}

.curtain__subtitle {
  margin-top: 1rem;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  color: rgba(0, 0, 0, 0.7);
}

.curtain__button {
  background: linear-gradient(135deg, #000000, #333333);
  color: #fff;
  border-radius: 999px;
  padding: 0.9rem 1.6rem;
  font-weight: 600;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.25);
}

.curtain__button:hover {
  opacity: 0.9;
}

.curtain-fade-enter-from,
.curtain-fade-leave-to {
  opacity: 0;
}

.curtain-fade-enter-active,
.curtain-fade-leave-active {
  transition: opacity 260ms ease;
}
</style>
