// Product data store
export const products = [
  {
    id: 1,
    name: 'Idle Hours',
    scentDescription: '',
    description:
      'A serene blend for moments of pure relaxation. Just like a cat spending the day doing absolutely nothing, this candle captures that perfect laziness.',
    waxColor: '#D4A574', // Warm honey/tan colored wax
    jarColor: 'black',
    labelColor: 'white',
    size: '9 oz',
    // price: 12,
    // image: '/ConceptArt/IdleHours.png',

      media: [
     { type: 'image', src: '/Candles/IdleHours/ConceptArt/IdleHours.png' },
    { type: 'image', src: '/Candles/IdleHours/ConceptArt/IdleHours.png' },
    { type: 'image', src: '/Candles/IdleHours/ConceptArt/sss.png' },
    { type: 'video', src: '/Candles/IdleHours/Videos/Idle_Hours.mp4' },
    { type: 'video', src: '/Candles/IdleHours/Videos/placeholder-video-IdleHours.mp4' },
  ],


        conceptArt: [
      '/Candles/IdleHours/ConceptArt/IdleHours.png',
      '/Candles/IdleHours/ConceptArt/IdleHours.png'
    ],

    designStory:
    'I always thought about how often my cats and cats in general would just sit and stare out the window for hours at what was seemingly nothing, but they were so content. As this candle is my first ever candle, I wanted to start with a peachy fruity scent with a simple colour. Nothing Fancy, just a nice candle to light when you want to relax and do nothing. The concept art is just some of my early sketches and ideas for the label design, which I wanted to be simple and minimalistic to match the vibe of the candle.',
        // optional video preview to play on hover
  
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
    // price: 20,
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
    // price: 12,
    image: '/placeholder-candle.svg',
    // also no video for now
  },
]

export function getProductById(id) {
  return products.find((product) => product.id === id)
}
