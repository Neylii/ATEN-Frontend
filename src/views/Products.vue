<template>
  <div class="products">
    <h1>Products page</h1>
    <p v-for="product in $store.state.allProducts" :key="product.productId">
      <a href="#">{{ product.name }}</a>
    </p>
  </div>
</template>

<script>
export default {
  methods: {},
  mounted() {},
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
