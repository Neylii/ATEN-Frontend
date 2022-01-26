import { createRouter, createWebHashHistory } from "vue-router";
import Products from "../views/Products.vue";
import About from "../views/About.vue";
import CreateAccount from "../views/CreateAccount";
import CardInfo from "../views/CardInfo.vue";
import Checkout from "../views/Checkout.vue";

const routes = [
  {
    path: "/",
    redirect: "/Products",
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
  {
    path: "/Checkout",
    name: "Checkout",
    component: Checkout,
  },
  {
    path: "/CardInfo/:productName",
    name: "CardInfo",
    component: CardInfo,
    props: true,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
