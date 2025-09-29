// Tối ưu: Import CSS theo thứ tự ưu tiên
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/bootstrap-override.css'
import './assets/css/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Lazy load Font Awesome - chỉ load khi cần
import '@fortawesome/fontawesome-free/css/fontawesome.min.css'
import '@fortawesome/fontawesome-free/css/solid.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Toaster from "@meforma/vue-toaster";

import Default from './layout/wrapper/index.vue'
import Blank from './layout/wrapper/index_blank.vue'
import Client from './layout/wrapper/index_client.vue'

const app = createApp(App)

app.use(router)
app.use(Toaster, {
  position: "top-right",
});
app.component("default-layout", Default);
app.component("blank-layout", Blank);
app.component("client-layout", Client);

app.mount('#app')
