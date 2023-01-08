import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../view/Home.vue";
import About from "../view/About.vue";

Vue.use(VueRouter);
const routes = [
   {
      path: "/",
      name: "Home",
      component: Home,
   },
   {
      path: "/about",
      name: "About",
      component: About,
   },
   {
      path: "/food",
      name: "Food",
      component: () => import("../view/Food.vue"),
   },
   {
      path: "/finish",
      name: "Finish",
      component: () => import("../components/Hero.vue"),
   },
];

const router = new VueRouter({
   mode: "history",
   base: process.env.BASE_URL,
   routes,
});

export default router;
