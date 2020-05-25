import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [

  {
    path: "/",
    component: () => import("../views/layouts/cabinet"),
    children: [
      {
        path: "",
        component: () => import("../views/Home")
      }
    ]
  },
  {
    path: "/",
    component: () => import("../views/layouts/empty"),
    children: [
      {
        path: "/about",
        name:'about',
        component: () => import("../views/About")
      },
      {
        path: "/cabinet",
        name:'cabinet',
        component: () => import("../views/Cabinet")
      },
      {
        path: "/order",
        name:'order',
        component: () => import("../views/Order")
      },
      {
        path: "/search",
        name:'search',
        component: () => import("../views/Search-results")
      },
      {
        path: "/card",
        name:'card',
        component: () => import("../views/Card")
      },
      {
        path: "/catalog",
        name:'catalog',
        component: () => import("../views/Catalog")
      },
      {
        path: "/delivery",
        name:'delivery',
        component: () => import("../views/Delivery")
      },
      {
        path: "/faq",
        name:'faq',
        component: () => import("../views/Faq")
      },
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
