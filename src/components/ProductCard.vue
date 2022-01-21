<template>
  <div class="card" style="width: 15rem">
    <img :src="productName + '.png'" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ productName }}</h5>
      <p class="card-text">
        {{ description }}
      </p>
      <a
        class="btn btn-primary"
        @click="$store.commit('addProductToCart', product)"
        >Buy</a
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
  },
};
</script>

<style></style>
