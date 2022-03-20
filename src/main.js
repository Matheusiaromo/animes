import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import Loading from './components/Loading.vue'

const app = createApp(App);
app.use(router);
app.component("Loading", Loading);
app.use(createPinia())
app.mount('#app');

