<template>
  <div class="col s12 m7">
    <div class="card mb-3">
      <div class="row g-0">
        <div class="col-md-4">
          <img
            :src="parsedProduct.name + '.png'"
            class="img-fluid rounded-start"
            alt="..."
          />
        </div>

        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ parsedProduct.name }}</h5>
            <p class="card-text" style="font-weight: bolder">
              {{ parsedProduct.price }} SEK
            </p>
            <p class="card-text">{{ parsedProduct.description }}</p>
            <p class="card-text">
              Här kommer det att stå en massa info om produkten du just klickat
              på. Denna info ska vi lägga in i databasen så att det visas på
              respektive produkt.
            </p>
            <a
              type="button"
              class="btn btn-primary btn-lg"
              @click="$store.commit('addProductToCart', product)"
              >Lägg i varukorg</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductItem",
  props: ["product"],
  data() {
    return {
      parsedProduct: Object,
    };
  },
  methods: {
    updatePage() {
      if (!this.product) {
        let cacheProduct = null;
        for (const product of this.$store.state.allProducts) {
          if (product.name === this.$route.params.productName) {
            cacheProduct = product;
            break;
          }
        }
        this.parsedProduct = cacheProduct;
      } else {
        this.parsedProduct = JSON.parse(this.product);
      }
    },
  },
  async beforeMount() {
    await this.$store.dispatch("getAllProducts");
    this.updatePage();
  },
  mounted() {},
  watch: {
    $route(to, from) {
      if (to.params.productName !== from.params.productName) {
        this.updatePage();
      }
    },
  },
};
</script>

<style scoped>
img {
  width: 30em;
  height: 30em;
}
</style>
