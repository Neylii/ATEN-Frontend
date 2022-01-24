<template>
  <div class="huge-container">
    <div class="item-container">
      <p>{{ itemInCart.product.name }}</p>
    </div>
    <div class="quantity-container">
      <p class="quantity">{{ itemInCart.quantity }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    itemInCart: Object,
  },
};
</script>

<style scoped>
.huge-container {
  display: flex;
}

.item-container {
  flex-grow: 1;
}

.quantity-container {
  display: flex;
  align-items: center;
}

.quantity {
}

/* Links inside the dropdown */
p {
  float: left;
  color: black;
  padding: 12px 12px 12px 0.5em;
  text-decoration: none;
  margin-bottom: 0;
}

/* Change color of dropdown links on hover */
.huge-container:hover {
  background-color: #f1f1f1;
}
</style>
