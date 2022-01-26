<template>
  <div class="container">
    <div class="box left-box">
      <div class="header-container">
        <div class="item-container">
          <p class="cart-footer-header header-text">Produkt</p>
        </div>
        <div class="quantity-price-container">
          <div class="quantity-container">
            <p class="cart-footer-header header-text">Antal</p>
          </div>
          <div class="price-container">
            <p class="cart-footer-header header-text">Pris</p>
          </div>
        </div>
      </div>
      <CheckoutCartItem
        v-for="itemInCart in $store.state.cartWithQuantity"
        :key="itemInCart.product.productId"
        :itemInCart="itemInCart"
      />
      <div class="footer-container">
        <p class="cart-footer-header">
          Att betala: {{ calculateTotalPrice }} kr
        </p>
      </div>
      <button class="btn btn-primary" @Click="handlePayClick()">Betala</button>
    </div>
  </div>
</template>

<script>
import CheckoutCartItem from "../components/CheckoutCartItem.vue";

export default {
  components: {
    CheckoutCartItem,
  },
  methods: {
    handlePayClick() {
      //let userId = this.$store.state.user.userId;
      let url = "checkout/1";
      this.$store.dispatch("checkoutApiCall", url);
    },
  },
  computed: {
    calculateTotalPrice() {
      let sum = 0;

      this.$store.state.productsInCart.forEach((element) => {
        sum += element.price;
      });
      return Math.round((sum + Number.EPSILON) * 100) / 100;
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  padding: 0px;
  justify-content: center;
}

.box {
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  max-width: 40em;
}

.left-box {
}

.right-box {
}

.header-container {
  display: flex;
  border-bottom: 1px solid grey;
}

.header-container div p {
  float: left;
  padding: 12px 12px 12px 0.5em;
  color: black;
}

.item-container {
  flex-grow: 7;
}

.quantity-price-container {
  display: flex;
  width: 10em;
}

.quantity-price-container div p {
  float: left;
  padding: 12px 12px 12px 0.5em;
}

.quantity-container {
  display: flex;
  align-items: center;
  flex-grow: 1;
}

.price-container {
  display: flex;
  align-items: center;
  flex-grow: 2;
}

.footer-container {
  display: flex;
  align-items: center;
  border-top: 1px solid grey;
}

.cart-footer-header {
  color: black;
  font-weight: bold;
  padding: 12px 16px;
  text-decoration: none;
  margin-bottom: 0;
  flex-grow: 1;
}
</style>
