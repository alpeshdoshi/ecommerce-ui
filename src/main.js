import { createApp } from 'vue'
import App from './App.vue'

window.axios = require('axios')
import swal from 'sweetalert';
import router from './router'
window.Swal = swal;

createApp(App).use(router).mount('#app')