import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VMask from 'v-mask'

import "./registerServiceWorker";
import './plugins/bootstrap-vue';
import './plugins/axios';
import './plugins/toasted';

Vue.use(VMask);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
