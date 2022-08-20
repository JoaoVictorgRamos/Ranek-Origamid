import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import ProdutoView from "../views/ProdutoView.vue";

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
  },
  {
    path: "/produto/:id",
    name: "ProdutoView",
    component: ProdutoView,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return window.scrollTo({ top: 0, behavior: "smooth" });
  },
});

export default router;
