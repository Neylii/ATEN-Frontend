<template>
  <div class="dropdown">
    <button class="btn btn-light mx-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        fill="currentColor"
        class="bi bi-cart"
        viewBox="0 0 16 16"
      >
        <path
          d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
        />
      </svg>
      &nbsp;{{ numberOfItemsInCart }}
    </button>
    <div class="dropdown-content">
      <CartDropdownItem
        v-for="itemInCart in $store.state.cartWithQuantity"
        :key="itemInCart.product.productId"
        :itemInCart="itemInCart"
      />
      <div class="footer-container">
        <a
          class="cart-footer"
          v-if="this.$store.state.productsInCart.length < 1"
          >Kundvagnen är tom</a
        >
        <a
          href="#Checkout"
          class="cart-footer"
          @Click="handleCheckoutClick()"
          v-else
          >Till kassan</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import CartDropdownItem from "../components/CartDropdownItem.vue";

export default {
  components: {
    CartDropdownItem,
  },
  methods: {
    handleCheckoutClick() {
      this.$router.push({ name: "Checkout" });
    },
  },
  computed: {
    numberOfItemsInCart() {
      return this.$store.state.productsInCart.length;
    },
  },
};
</script>

<style scoped>
/* Style The Dropdown Button */
.dropbtn {
  background-color: #4caf50;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 230px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {
  background-color: #3e8e41;
}

.footer-container {
  display: flex;
  align-items: center;
}

.cart-footer {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  margin-bottom: 0;
  flex-grow: 1;
}

a:hover {
  background-color: #f1f1f1;
}
</style>
