# Curled Cat Co Website

Welcome to the Curled Cat Co website project! This is an e-commerce platform for our unique candle brand featuring hand-painted pawprints and vibrant wax colors.

## Project Structure

The project is organized as follows:

```
curled-cat-co-site
├── public
│   └── index.html          # Main HTML file for the application
├── src
│   ├── main.js             # Initializes the Vue application
│   ├── App.vue             # Root component of the application
│   ├── components           # Reusable components
│   │   ├── Header.vue      # Navigation and branding
│   │   ├── Footer.vue      # Footer with copyright and links
│   │   ├── ProductCard.vue  # Displays individual candle products
│   │   ├── ProductGallery.vue # Collection of ProductCard components
│   │   └── PawprintBadge.vue # Represents the unique pawprint feature
│   ├── pages               # Different pages of the application
│   │   ├── Home.vue        # Landing page
│   │   ├── ProductPage.vue  # Detailed product information
│   │   ├── Collection.vue   # Showcases all available products
│   │   └── About.vue       # Brand story and information
│   ├── layouts             # Layout components
│   │   └── DefaultLayout.vue # Default layout wrapping content
│   ├── composables         # Custom composable functions
│   │   └── useProducts.js  # Handles product data fetching
│   ├── store               # Vuex store for state management
│   │   └── index.js        # Global state management setup
│   ├── styles              # CSS files
│   │   ├── variables.css    # CSS variables for styling
│   │   └── global.css       # Global styles
│   └── lib                 # Library files
│       └── snipcart.js     # Snipcart integration for e-commerce
├── package.json            # npm configuration file
├── vite.config.js          # Vite configuration file
├── netlify.toml           # Netlify deployment configuration
└── README.md               # Project documentation
```

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd curled-cat-co-site
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Run the development server**:
   ```
   npm run dev
   ```

4. **Build for production**:
   ```
   npm run build
   ```

5. **Deploy**:
   You can deploy the application using Vercel or Netlify. Make sure to configure the deployment settings as needed.

## Features

- Modern, sleek design with a black and white color scheme.
- E-commerce functionality using Snipcart for easy product purchasing.
- Unique candle designs with hand-painted pawprints.
- Responsive layout for optimal viewing on all devices.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

## Acknowledgments

Thank you for checking out the Curled Cat Co website project! We hope you enjoy our candles as much as we enjoy making them.