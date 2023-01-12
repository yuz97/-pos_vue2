import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.css";
import VueToast from "vue-toast-notification";
import "vue-toast-notification/dist/theme-default.css";

Vue.config.productionTip = false;

Vue.use(VueToast);
new Vue({
   router,
   render: (h) => h(App),
}).$mount("#app");
