<script setup>
const props = defineProps({
  product: Object
})

const video = props.product.media?.find(m => m.type === 'video')
</script>

<template>
  <div class="product-media">
    <img
      v-if="product.media?.length"
      :src="product.media[0].src"
      :alt="product.name"
      class="preview-image"
    />

    <video
      v-if="video"
      :src="video.src"
      class="preview-video"
      muted
      loop
      autoplay
      playsinline
    ></video>
  </div>
</template>

<style scoped>
.product-media {
  width: 100%;
  aspect-ratio: 1 / 1;
  position: relative;
  overflow: hidden;
  border: 1px solid #e0e0e0;
  background: #fff;
}

.preview-image,
.preview-video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.preview-video {
  opacity: 0;
  transition: opacity 0.3s ease;
}

.product-media:hover .preview-video {
  opacity: 1;
}
</style>