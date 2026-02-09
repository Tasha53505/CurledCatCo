import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Assuming you will set up Vue Router
import store from './store'; // Assuming you will set up Vuex
import './styles/global.css'; // Import global styles

const app = createApp(App);

app.use(router);
app.use(store);

app.mount('#app');