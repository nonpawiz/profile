import { createApp } from "vue";
import { createPinia } from "pinia";
import VueLoading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import VueAxios from 'vue-axios'
import axios from 'axios'
import axios2 from 'axios'
import store from 'store'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(VueSweetalert2);
app.use(createPinia());
app.use(VueLoading);
app.use(router);
app.use(store);
app.use(VueAxios, { $myHttp: axios, axios2: axios2 }) 
app.mount("#app");
