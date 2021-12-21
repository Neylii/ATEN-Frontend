<template>
  <div class="card" style="width: 15rem">
    <img
      src="../../src/assets/images/Rocketleague.jpg"
      class="card-img-top"
      alt="..."
    />
    <div class="card-body">
      <h5 class="card-title">{{ productName }}</h5>
      <p class="card-text">
        {{ description }}
      </p>
      <a class="btn btn-primary">Buy</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    productName: String,
    description: String,
  },
};
</script>

<style></style>
