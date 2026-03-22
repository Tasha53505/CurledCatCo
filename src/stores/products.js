// Product data store
export const products = [
  {
    id: 1,
    status:'active',
    name: 'Idle Hours',
    scentDescription: 'Sparkling Peach And Ripe Berries With A Creamy Vanilla Finish',
    description: 'A delicious peachy berry blend for moments of pure relaxation. Just like Cats who spend hours upon hours doing nothing and relaxing, this candle is meant to be the perfect accompanyment for those lazy days.',
    waxColor: '#D4A574', // Warm honey/tan colored wax
    jarColor: 'black',
    labelColor: 'white',
    size: '9 oz',
    // price: 12,

    // Carosel product details images / videps
      media: [
          { type: 'image', src: '/Candles/IdleHours/Photos/IdleHoursWithFlame.jpg' },
        { type: 'image', src: '/Candles/IdleHours/Photos/IdleHoursCoverImage.jpg' },


      { type: 'image', src: '/Candles/IdleHours/Photos/ClearLabel.jpg' },


     { type: 'image', src: '/Candles/IdleHours/Photos/SlightTopDownFlame.jpg' },


         { type: 'image', src: '/Candles/IdleHours/Photos/PawprintCloseup.jpg' },
     { type: 'image', src: '/Candles/IdleHours/Photos/SlightTopOverview.jpg' },
     
   
     { type: 'image', src: '/Candles/IdleHours/Photos/windowFlameToptown.jpg' },
     { type: 'image', src: '/Candles/IdleHours/Photos/windowFrontView.jpg' },
 
 { type: 'video', 
        src: '/Candles/IdleHours/Videos/PawPrintVideo.mp4', 
        speed: 15,        // playback rate
        mute: true,       // always muted
        autoplay: true
      },   
  ],


        conceptArtMedia: [
          { type: 'image', src: '/Candles/IdleHours/ConceptArt/Sketch.png' },
          { type: 'image', src: '/Candles/IdleHours/ConceptArt/IdleHours.png' },
          { type: 'video', src: '/Candles/IdleHours/ConceptArt/Idle_Hours.mp4' }
        ],

    designStory:
    'I always thought about how often my cats and cats in general would just sit and stare out the window for hours at what was seemingly nothing, but they were so content. As this candle is my first ever candle, I wanted to start with a peachy fruity scent with a simple colour. Nothing Fancy, just a nice candle to light when you want to relax and do nothing. The concept art is just some of my early sketches and ideas for the label design, which I wanted to be simple and minimalistic to match the vibe of the candle.',
        // optional video preview to play on hover
  
  },
    {
    id: 2,
    status: 'Coming Soon',
    name: 'Candle Coming Soon',
    scentDescription: 'Coming Soon...',
    description:
      'Description coming soon.',
    waxColor: '#D4A574', // Warm honey/tan colored wax
    jarColor: 'black',
    labelColor: 'white',
    size: '9 oz',
    // price: 12,

    // Carosel product details images / videps
      media: [
     { type: 'image', src: '/Candles/X' },
    { type: 'image', src: '/Candles/IdleHours/x' },
    { type: 'video', src: '/Candles/IdleHours/x' },
    // { type: 'video', src: '/Candles/IdleHours/Videos/placeholder-video-IdleHours.mp4' },
  ],


        conceptArtMedia: [
          { type: 'image', src: '/Candles/IdleHours/ConceptArt/x' },
          { type: 'image', src: '/Candles/IdleHours/ConceptArt/x' },
          { type: 'video', src: '/Candles/IdleHours/ConceptArt/x' }
        ],

    designStory:
          '',
  
  },
  {
    id: 3,
     status: 'Coming Soon',
    name: 'Candle Coming Soon',
    scentDescription: 'Coming Soon...',
    description:
      'Description coming soon.',
      
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
