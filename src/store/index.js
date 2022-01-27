import { createStore } from "vuex";
// för att importera separata js filer
import * as consts from "../assets/const.js";
import * as utils from "../assets/utils.js";

export default createStore({
  state: {
    errorMessage: String,
    allProducts: [],
    showLogin: false,
    loginStatus: false,
    search: "",
    user: {
      userId: Number,
      username: String,
      level: String,
    },
    cartWithQuantity: [],
    productsInCart: [],
  },
  //Sync methods, called with this.$store.commit("methodName", Object);
  //OBS: Always use mutation to update state!
  mutations: {
    /**
     * Updates the state allProducts
     * @param {*} state the state
     * @param {*} listOfProducts the list of products
     */
    setAllProducts(state, listOfProducts) {
      state.allProducts = listOfProducts;
    },
    updateMessage(state, message) {
      state.search = message;
    },
    changeLoginScreen(state, value) {
      state.showLogin = value;
    },
    changeLoginStatus(state, value) {
      state.loginStatus = value;
    },
    updateUserInfo(state, user) {
      state.user.userId = user.userId;
      state.user.username = user.username;
    },
    emptyCart(state) {
      state.cartWithQuantity = [];
      state.productsInCart = [];
    },
    addProductToCart(state, product) {
      state.productsInCart.push(product);
      if (
        state.cartWithQuantity.some(
          (element) => element.product.name === product.name
        )
      ) {
        let index = state.cartWithQuantity
          .map((product) => product.product.name)
          .indexOf(product.name);
        let newQuantity = state.cartWithQuantity[index].quantity + 1;
        state.cartWithQuantity[index] = {
          product: product,
          quantity: newQuantity,
        };
      } else {
        state.cartWithQuantity.push({ product: product, quantity: 1 });
      }
    },
    //--------------------------------------------------------------------------
    updateUsernameFromCookie(state) {
      state.user.username = utils.getCookie("username");
      if (state.user.username) {
        this.commit("changeLoginStatus", true);
      }
    },
    //--------------------------------------------------------------------------
    setUsernameToCookie(state, value) {
      utils.setCookie("username", value, 30);
      this.commit("updateUsernameFromCookie");
    },
  },
  //Async methods this.$store.dispatch("methodName", Object);
  actions: {
    /**
     * Method for calling the API
     * @param {*} state the state
     * @param {*} urlApi the url param to the api
     * @returns the response from the API call
     */
    async apiCall(state, urlApi) {
      let json = null;

      let apiUrl = consts.urls.urlHost + urlApi;

      try {
        let response = await fetch(apiUrl);
        if (!response.ok) {
          console.log("Smeoth wrong");
          throw new Error("Something went wrong");
        }
        json = await response.json();
      } catch (err) {
        this.errorMessage = err.message;
      }

      return json;
    },
    async checkIfUserExists({ dispatch }, user) {
      let json = await dispatch("apiCall", `users/${user.username}`);
      return json;
    },
    /**
     * Gets all the products
     */
    async getAllProducts() {
      let json = await this.dispatch("apiCall", "products");
      this.commit("setAllProducts", json);
    },

    async checkoutApiCall({ state }, urlApi) {
      let json = null;
      let apiUrl = consts.urls.urlHost + urlApi;

      try {
        let response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          mode: "cors",
          body: JSON.stringify(state.productsInCart),
        });
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        json = await response.json();
      } catch (err) {
        this.errorMessage = err.message;
      }
      return json;
    },
  },
});
