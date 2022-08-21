import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import ProdutoView from "../views/ProdutoView.vue";
import LoginView from "../views/LoginView.vue";

import UsuarioView from "../views/usuario/UsuarioView.vue";
import UsuarioProdutos from "../views/usuario/UsuarioProdutos.vue";
import UsuarioVendas from "../views/usuario/UsuarioVendas.vue";
import UsuarioCompras from "../views/usuario/UsuarioCompras.vue";
import UsuarioEditar from "../views/usuario/UsuarioEditar.vue";

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
  {
    path: "/LoginView",
    name: "LoginView",
    component: LoginView,
    props: true,
  },
  {
    path: "/UsuarioView",
    component: UsuarioView,
    children: [
      {
        path: "",
        name: "UsuarioView",
        component: UsuarioProdutos,
      },
      {
        path: "UsuarioCompras",
        name: "UsuarioCompras",
        component: UsuarioCompras,
      },
      {
        path: "UsuarioVendas",
        name: "UsuarioVendas",
        component: UsuarioVendas,
      },
      {
        path: "UsuarioEditar",
        name: "UsuarioEditar",
        component: UsuarioEditar,
      },
    ],
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
