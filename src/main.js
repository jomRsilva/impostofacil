import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

require("./assets/css/global.css");
require("./assets/css/layout.css");
require("./assets/css/form.css");
require("./assets/css/home.css");
require("./assets/css/asidenav.css");
require("./assets/css/custom.css");
require("./assets/css/table.css");
require("./assets/css/modal.css");

createApp(App).use(store).use(router).mount('#app')
