// Product data store
export const products = [
  {
    id: 1,
    name: 'Idle Hours',
    description:
      'A serene blend for moments of pure relaxation. Just like a cat spending the day doing absolutely nothing, this candle captures that perfect laziness.',
    waxColor: '#D4A574', // Warm honey/tan colored wax
    jarColor: 'black',
    labelColor: 'white',
    size: '9 oz',
    price: 12,
    image: '/placeholder-candle.svg',
    // optional video preview to play on hover
    video: '/placeholder-video.mp4',
  },
  {
    id: 2,
    name: 'Pollen Paws',
    description:
      'A serene blend for moments of pure relaxation. Just like a cat spending the day doing absolutely nothing, this candle captures that perfect laziness.',
    waxColor: '#000000, #ffb325',
    jarColor: 'clear',
    labelColor: 'transparent',
    size: '9 oz',
    price: 20,
    image: '/placeholder-candle.svg',
    // no video available for this product (will just show static image)
  },
  {
    id: 3,
    name: 'Idle Hours',
    description:
      'A serene blend for moments of pure relaxation. Just like a cat spending the day doing absolutely nothing, this candle captures that perfect laziness.',
    waxColor: '#D4A574',
    jarColor: 'black',
    labelColor: 'white',
    size: '9 oz',
    price: 12,
    image: '/placeholder-candle.svg',
    // also no video for now
  },
]

export function getProductById(id) {
  return products.find((product) => product.id === id)
}
