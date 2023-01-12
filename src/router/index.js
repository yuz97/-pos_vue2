import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../view/Home.vue";

Vue.use(VueRouter);
const routes = [
   {
      path: "/",
      name: "Home",
      component: Home,
   },

   {
      path: "/food",
      name: "Food",
      component: () => import("../view/Food.vue"),
   },
   {
      path: "/detail/:id",
      name: "Detail",
      component: () => import("../view/Detail.vue"),
   },
   {
      path: "/finish",
      name: "Finish",
      component: () => import("../components/Hero.vue"),
   },
   {
      path: "/keranjang",
      name: "Keranjang",
      component: () => import("../view/Keranjang.vue"),
   },
   {
      path: "/finish",
      name: "success",
      component: () => import("../view/Success.vue"),
   },
];

const router = new VueRouter({
   mode: "history",
   base: process.env.BASE_URL,
   routes,
});

export default router;
