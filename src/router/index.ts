import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

export const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Главная",
    meta: { layout: "main", sideMenu: true, exact: true },
    component: () => import(/* webpackChunkName: "home" */ "@/pages/Home.vue"),
  },
  {
    path: "/about",
    name: "About",
    meta: { layout: "main" },
    component: () =>
      import(/* webpackChunkName: "about" */ "@/pages/About.vue"),
  },
  {
    path: "/examples",
    name: "Примеры",
    meta: { layout: "main", sideMenu: true },
    component: () =>
      import(/* webpackChunkName: "examples" */ "@/pages/Examples.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "@/pages/Login.vue"),
  },
  {
    path: "/registration",
    name: "Registration",
    component: () =>
      import(/* webpackChunkName: "registration" */ "@/pages/Registration.vue"),
  },
  {
    path: "/about",
    name: "О сборке",
    meta: { layout: "main", sideMenu: true },
    component: () =>
      import(/* webpackChunkName: "about" */ "@/pages/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
