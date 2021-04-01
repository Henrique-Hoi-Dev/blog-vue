import Vue from "vue";
import VueRouter from "vue-router";
import TextUser from "../views/UserText.vue";
import HomeList from "../views/HomeList.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomeList",
    component: HomeList,
  },
  {
    path: "/user/text",
    name: "TextUser",
    component: TextUser,
  },
  {
    path: "/user/registration",
    name: "UserRegistration",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/UserRegistration.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
