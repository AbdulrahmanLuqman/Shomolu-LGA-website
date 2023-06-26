import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import AOS from 'aos';
import 'aos/dist/aos.css';
import router from './router';
// import * as VueGoogleMaps from 'vue2-google-maps';



const app = createApp(App)


// app.use(VueGoogleMaps, {
//   load: {
//     key: 'YOUR_API_KEY', // Replace with your actual API key
//   }
// });

app.use(createPinia())
app.use(AOS.init());
app.use(router)
app.mount('#app')
