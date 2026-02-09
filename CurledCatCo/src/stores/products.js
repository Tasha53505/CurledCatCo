// Product data store
export const products = [
  {
    id: 1,
    name: 'Idle Hours',
    description: 'A serene blend for moments of pure relaxation. Just like a cat spending the day doing absolutely nothing, this candle captures that perfect laziness.',
    waxColor: '#D4A574', // Warm honey/tan colored wax
    jarColor: 'black',
    labelColor: 'white',
    size: '9 oz',
    price: 12,
    image: '/placeholder-candle.svg',
  },
  {
    id: 2,
    name: 'Idle Hours',
    description: 'A serene blend for moments of pure relaxation. Just like a cat spending the day doing absolutely nothing, this candle captures that perfect laziness.',
    waxColor: '#D4A574',
    jarColor: 'black',
    labelColor: 'white',
    size: '9 oz',
    price: 12,
    image: '/placeholder-candle.svg',
  },
  {
    id: 3,
    name: 'Idle Hours',
    description: 'A serene blend for moments of pure relaxation. Just like a cat spending the day doing absolutely nothing, this candle captures that perfect laziness.',
    waxColor: '#D4A574',
    jarColor: 'black',
    labelColor: 'white',
    size: '9 oz',
    price: 12,
    image: '/placeholder-candle.svg',
  },
]

export function getProductById(id) {
  return products.find(product => product.id === id)
}
