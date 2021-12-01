import { createStore } from "vuex";
// för att importera separata js filer
import * as consts from "../assets/const.js";

export default createStore({
  state: {
    errorMessage: String,
    allProducts: [],
  },
  //Sync methods, called with this.$store.commit("methodName", Object);
  mutations: {
    setAllProducts(state, listOfProducts) {
      state.allProducts = listOfProducts;
    },
  },
  //Async methods this.$store.dispatch("methodName", Object);
  actions: {
    //--------------------------------------------------------------------------
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
    //--------------------------------------------------------------------------
    async getAllProducts() {
      let json = await this.dispatch("apiCall", "products");
      this.commit("setAllProducts", json);
    },
  },
});
