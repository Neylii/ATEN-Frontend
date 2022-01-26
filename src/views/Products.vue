<template>
  <div class="container">
    <div class="header"></div>
    <div class="sidebar">
      <!--Sidebar-->
      <div class="list-group">
        <button
          type="button"
          class="list-group-item list-group-item-action active"
          aria-current="true"
          name="products"
          @click="
            handleFilter($event);
            isHidden = false;
          "
        >
          All products
        </button>
        <button
          type="button"
          class="list-group-item list-group-item-action list-group-item-dark fw-bold"
          name="allConsoles"
          @click="
            handleFilter($event);
            isHidden = true;
          "
        >
          Consoles
        </button>
        <button
          type="button"
          class="list-group-item list-group-item-action"
          name="nintendo"
          @click="
            handleFilter($event);
            isHidden = true;
          "
        >
          Nintendo
        </button>
        <button
          type="button"
          class="list-group-item list-group-item-action"
          name="sega"
          @click="
            handleFilter($event);
            isHidden = true;
          "
        >
          Sega
        </button>
        <button
          type="button"
          class="list-group-item list-group-item-action"
          name="sony"
          @click="
            handleFilter($event);
            isHidden = true;
          "
        >
          Sony
        </button>
        <button
          type="button"
          class="list-group-item list-group-item-action"
          name="hampsole"
          @click="
            handleFilter($event);
            isHidden = true;
          "
        >
          Hampsole
        </button>
        <button
          type="button"
          class="list-group-item list-group-item-action list-group-item-dark fw-bold"
          name="allGames"
          @click="
            handleFilter($event);
            isHidden = false;
          "
        >
          Games
        </button>
        <button
          type="button"
          class="list-group-item list-group-item-action"
          name="action"
          @click="
            handleFilter($event);
            isHidden = true;
          "
        >
          Action
        </button>
        <button
          type="button"
          class="list-group-item list-group-item-action"
          name="adventure"
          @click="
            handleFilter($event);
            isHidden = true;
          "
        >
          Adventure
        </button>
        <button
          type="button"
          class="list-group-item list-group-item-action"
          name="kids"
          @click="
            handleFilter($event);
            isHidden = true;
          "
        >
          Kids
        </button>
        <button
          type="button"
          class="list-group-item list-group-item-action"
          name="racing"
          @click="
            handleFilter($event);
            isHidden = true;
          "
        >
          Racing
        </button>
        <button
          type="button"
          class="list-group-item list-group-item-action"
          name="strategy"
          @click="
            handleFilter($event);
            isHidden = true;
          "
        >
          Strategy
        </button>
        <button
          type="button"
          class="list-group-item list-group-item-action list-group-item-danger"
          @click="isHidden = false"
        >
          Special Offer!
        </button>
      </div>
      <div class="list-group" style="margin-top: 2em">
        <button
          type="button"
          class="list-group-item list-group-item-action active"
          aria-current="true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-telephone"
            viewBox="0 0 16 16"
          >
            <path
              d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
            />
          </svg>
          Kundsupport
        </button>
        <button
          type="button"
          class="list-group-item list-group-item-action list-group-item-dark fw-bold"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-envelope"
            viewBox="0 0 16 16"
          >
            <path
              d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"
            />
          </svg>
          Nyhetsbrev
        </button>
        <button type="button" class="list-group-item list-group-item-action">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-facebook"
            viewBox="0 0 16 16"
          >
            <path
              d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
            />
          </svg>
          Tipsa en vän
        </button>
        <button
          type="button"
          class="list-group-item list-group-item-action"
          @Click="handleCheckoutClick()"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-credit-card"
            viewBox="0 0 16 16"
          >
            <path
              d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z"
            />
            <path
              d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z"
            />
          </svg>
          Betalning
        </button>
      </div>
    </div>
    <!--Main content-->
    <div class="content container-fluid" style="">
      <!--Carousel-->
      <div v-if="!isHidden">
        <Carousel />
      </div>
      <div class="row justify-content-between" style="margin: auto">
        <!--Cards row 1-->
        <Product-card
          v-for="product in filteredProducts"
          :key="product.productId"
          :productName="product.name"
          :description="product.description"
          :product="product"
          :price="product.price"
        >
          {{ product }}
        </Product-card>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from "../components/ProductCard.vue";
import Carousel from "../components/Carousel.vue";

export default {
  components: {
    ProductCard,
    Carousel,
  },
  data() {
    return {
      filteredProducts: this.$store.state.allProducts,
      gameCategories: [],
      consoleCategories: [],
      isHidden: false,
    };
  },
  methods: {
    /**
     * Function for saving the game genres and console brands into two different lists for later usages.
     * @author Emma Fredriksson
     */
    getCategories() {
      this.$store.state.allProducts.forEach((product) => {
        if (product.genre) {
          this.gameCategories.push(product.genre);
        }
        if (product.brand) {
          this.consoleCategories.push(product.brand);
        }
      });
    },
    /**
     * Function for handle buttonclicks on side navigation bar.
     * @param event
     * @returns {Promise<void>}
     * @author Emma Fredriksson
     */
    async handleFilter(event) {
      this.getCategories();
      let url = event.target.name;
      let json = await this.$store.dispatch("apiCall", this.checkCategory(url));
      if (json) {
        this.filteredProducts = json;
      }
    },
    /**
     * Function for checking which category was clicked in order to give the right url to the api call.
     * @param url
     * @returns {string|*}
     * @author Emma Fredriksson
     */
    checkCategory(url) {
      if (this.gameCategories.includes(url.toUpperCase())) {
        url = url.toUpperCase();
        return "games/" + url;
      } else if (this.consoleCategories.includes(url.toUpperCase())) {
        url = url.toUpperCase();
        return "consoles/" + url;
      }
      return url;
    },
    handleCheckoutClick() {
      this.$router.push({ name: "Checkout" });
    },
  },
  async mounted() {
    this.getCategories();
    let url = "products";
    let json = await this.$store.dispatch("apiCall", this.checkCategory(url));
    if (json) {
      await this.$store.commit("setAllProducts", json);
      this.filteredProducts = json;
    }
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}

@media screen and (min-width: 360px) {
  .products {
    background-color: aqua;
  }
}
</style>
