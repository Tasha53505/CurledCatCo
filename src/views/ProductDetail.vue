<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getProductById } from '@/stores/products'
import { useCart } from '@/composables/useCart'

const route = useRoute()
const router = useRouter()

const productId = computed(() => Number(route.params.id))
const product = computed(() => getProductById(productId.value))

const { addToCart } = useCart()
const handleAddToCart = () => {
  if (product.value) {
    addToCart(product.value)
  }
}



const media = computed(() =>
  product.value?.media || []
)



const goBack = () => {
  router.push({ name: 'Shop' })
}
const currentImage = ref(0)

const currentIndex = ref(0)

const nextMedia = () => {
  if (!media.value.length) return
  currentIndex.value =
    (currentIndex.value + 1) % media.value.length
}

const prevMedia = () => {
  if (!media.value.length) return
  currentIndex.value =
    (currentIndex.value - 1 + media.value.length) %
    media.value.length
}

const setMedia = (index) => {
  currentIndex.value = index
}

const showConcept = ref(false)

// Modal for enlarging images
const isModalOpen = ref(false)
const modalMedia = ref(null)
const modalType = ref('image')

const openModal = (src, type = 'image') => {
  modalMedia.value = src
  modalType.value = type
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
  modalMedia.value = null
}



</script>

<template>
  <div class="product-detail">
    <div class="container">
      <button class="back-button" @click="goBack">← Back To Candle Collection</button>

      <div v-if="product" class="product-detail-grid">
        <!-- <div class="image-wrapper">
          <img :src="product.image" :alt="product.name" />
        </div> -->

<div class="image-wrapper">

<div class="main-media" v-if="media.length">

  <img
    v-if="media[currentIndex].type === 'image'"
    :src="media[currentIndex].src"
    class="main-image"
    @click="openModal(media[currentIndex].src, 'image')"
  />

  <video
    v-else
    :src="media[currentIndex].src"
    class="main-image"
    controls
    @click="openModal(media[currentIndex].src, 'video')"  />

  <button class="nav prev" @click="prevMedia">‹</button>
  <button class="nav next" @click="nextMedia">›</button>

</div>


</div>



        <div class="info">
          <h1>{{ product.name }}</h1>
          <p class="description">{{ product.description }}</p>

          <div class="specs">
            <div><strong>Size:</strong> {{ product.size }}</div>
            <div>
              <strong>Jar:</strong>
              {{ product.jarColor.charAt(0).toUpperCase() + product.jarColor.slice(1) }}
            </div>
            <!-- <div><strong>Price:</strong> ${{ product.price }}</div> -->
          </div>

          <!-- <button class="add-to-cart" @click="handleAddToCart">Add to cart</button> -->
        </div>

        <div class="thumbnail-row">
  <div
    v-for="(item, index) in media"
    :key="index"
  >
    <img
      v-if="item.type === 'image'"
      :src="item.src"
      :class="{ active: index === currentIndex }"
      @click="setMedia(index)"
    />

    <div
      v-else
      class="video-thumb"
      :class="{ active: index === currentIndex }"
      @click="setMedia(index)"
    >
      ▶
    </div>
  </div>
</div>



      </div>

      

      <div v-else class="not-found">
        <h2>Product not found</h2>
        <p>We couldn't find that product. Try going back to the shop.</p>
      </div>

       <div class="concept-section">
    <button class="accordion" @click="showConcept = !showConcept">
      Interested in how I made this candle?
    </button>

      <div v-if="showConcept" class="concept-gallery">
        <h3 class="concept-title">Design Process</h3> <br />


                <p class="design-story">
          {{ product.designStory }}
        </p>
        <img
          v-for="(art, index) in product.conceptArt"
          :key="index"
          :src="art"
          alt="Concept art"
        />
      </div>
    </div>


    </div>

     <div v-if="isModalOpen" class="modal" @click="closeModal">
  <div class="modal-content" @click.stop>
    
    <img
      v-if="modalType === 'image'"
      :src="modalMedia"
      class="modal-media"
    />

    <video
      v-if="modalType === 'video'"
      :src="modalMedia"
      class="modal-media"
      controls
      autoplay
    ></video>

    <button class="close-button" @click="closeModal">✕</button>

  </div>
</div>

  </div>


</template>

<style scoped>
.video-thumb {
  width: 70px;
  height: 70px;
  background: #000;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.2rem;
}

/* Modal styling */
.modal {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}

.modal-content {
  position: relative;
  max-width: 90%;
  max-height: 90%;
}

.modal-media {
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
}

.close-button {
  position: absolute;
  top: -40px;
  right: 0;
  background: white;
  border: none;
  width: 35px;
  height: 35px;
  cursor: pointer;
  font-size: 1rem;
}


/* Gallery styling */
.image-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f5f5f5;
  border: 1px solid #e0e0e0;
  padding: 2rem;
  position: relative;
}



.main-image {
 width: 100%;
  max-height: 500px;
  object-fit: contain;
  margin-bottom: 1rem;
}

.nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0,0,0,0.7);
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  cursor: pointer;
}

.prev { left: 10px; }
.next { right: 10px; }

.thumbnail-row {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
}


.thumbnail-row img, .thumbnail-row   video {
  width: 70px;
  height: 70px;
  object-fit: cover;
  cursor: pointer;
  border: 2px solid transparent;
}



.thumbnail-row img:hover, .thumbnail-row video:hover {
  opacity: 0.7;
}

.thumbnail-row img.active, .thumbnail-row video.active {
  border-color: rgb(110, 110, 110);
  opacity: 1;
}

.accordion {
  border: 1px solid #000;
  background: black;
  color: white;
  padding: 0.7rem 1.2rem;
  cursor: pointer;
  font-size: 1rem;
}

.accordion:hover {
  opacity: 0.8;
}


/* Concept art How I made candle */


.concept-gallery {
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(2, 220px);
  justify-content: center;
  gap: 1rem;
}

.concept-gallery img {
  width: 100%;
  object-fit: cover;
}

.concept-section {
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.concept-title {
  font-size: 2.2rem;
  text-align: center;
  grid-column: 1 / -1;
}


.design-story {
  grid-column: 1 / -1;
  max-width: 500px;
  margin: 0 auto 1rem auto;
  text-align: center;
  color: #555;
  line-height: 1.6;
}


/* Product Detail Styling */
.product-detail {
  min-height: 100vh;
  padding: 3rem 0;
}

.back-button {
  background: none;
  border: 1px solid #000;
  padding: 0.5rem 1rem;
  cursor: pointer;
  margin-bottom: 2rem;
  font-size: 0.9rem;
}

.product-detail-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;
}


.image-wrapper img {
  max-width: 100%;
  max-height: 560px;
  object-fit: contain;
}

.info h1 {
  margin-top: 0;
  font-size: 2.2rem;
}

.description {
  margin: 1.5rem 0;
  color: #555;
  line-height: 1.6;
}

.specs {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
  font-size: 0.95rem;
  color: #333;
}

.add-to-cart {
  background-color: #000;
  color: #fff;
  border: none;
  padding: 0.85rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s ease;
}

.add-to-cart:hover {
  background-color: #333;
}

.not-found {
  text-align: center;
  padding: 3rem;
}

@media (max-width: 1024px) {
  .product-detail-grid {
    grid-template-columns: 1fr;
  }

  .specs {
    grid-template-columns: 1fr;
  }
}
</style>
