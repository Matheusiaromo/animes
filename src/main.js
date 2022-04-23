import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import Loading from './components/Loading.vue'
import MdiSvg from "@yeliulee/vue-mdi-svg/v3" // or just "@yeliulee/vue-mdi-svg"

const app = createApp(App);
app.use(router);
app.component("Loading", Loading);
app.use(createPinia())
app.use(MdiSvg)
app.mount('#app');

