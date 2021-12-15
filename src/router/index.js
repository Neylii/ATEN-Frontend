import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Products from "../views/Products.vue";
import About from "../views/About.vue";
import CreateAccount from "../views/CreateAccount";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Products",
    name: "Products",
    component: Products,
  },
  {
    path: "/About",
    name: "About",
    component: About,
  },
  {
    path: "/CreateAccount",
    name: "CreateAccount",
    component: CreateAccount,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
