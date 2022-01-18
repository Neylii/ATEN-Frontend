import { createStore } from "vuex";
// för att importera separata js filer
import * as consts from "../assets/const.js";

export default createStore({
  state: {
    errorMessage: String,
    allProducts: [],
    showLogin: false,
    loginStatus: false,
    user: {
      username: String,
      level: String,
    },
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
    changeLoginScreen(state, value) {
      state.showLogin = value;
    },
    changeLoginStatus(state, value) {
      state.loginStatus = value;
    },
    updateUserInfo(state, user) {
      state.user.username = user.username;
      state.user.level = user.level;
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
          throw new Error("Something went wrong");
        }
        json = await response.json();
      } catch (err) {
        this.errorMessage = err.message;
      }

      return json;
    },
    /**
     * Gets all the products
     */
    async getAllProducts() {
      let json = await this.dispatch("apiCall", "products");
      this.commit("setAllProducts", json);
    },
  },
});
