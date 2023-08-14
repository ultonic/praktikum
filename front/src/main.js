import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import store from './store';



const app = createApp(App);
app.use(router);
app.use(store);

axios.defaults.baseURL = 'http://localhost:3000'; 
app.config.globalProperties.$http = axios;

app.mount('#app');
