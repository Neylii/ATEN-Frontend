<template>
  <div class="card" style="width: 15rem">
    <img
      :src="productName + '.png'"
      class="card-img-top"
      @click="handleInfoClick()"
      alt="..."
    />
    <div class="card-body">
      <h5 class="card-title">{{ productName }}</h5>
      <p class="card-text">
        {{ description }}
      </p>
      <p class="card-text" style="font-weight: bolder">{{ price }} SEK</p>
      <a class="btn btn-secondary btn-lg mx-1" @click="handleInfoClick()"
        >Info</a
      >
      <a
        class="btn btn-primary btn-lg"
        @click="$store.commit('addProductToCart', product)"
        >Köp</a
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
    productName: String,
    description: String,
    price: Number,
  },
  methods: {
    handleInfoClick() {
      this.$router.push({
        name: "CardInfo",
        params: {
          productName: this.productName,
          product: JSON.stringify(this.product),
        },
      });
    },
  },
};
</script>

<style scoped>
img {
  width: 13em;
  height: 13em;
}

.card {
  cursor: pointer;
}
</style>
