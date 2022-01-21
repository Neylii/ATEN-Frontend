<template>
  <div>
    <TopTitle msg="Checkout test" />
  </div>
  <button @Click="handlePayClick()">Betala</button>
</template>

<script>
export default {
  components: {},
  methods: {
    handlePayClick() {
      //let userId = this.$store.state.user.userId;
      let url = "checkout/1";
      this.$store.dispatch("checkoutApiCall", url);
    },
  },
};
</script>

<style scoped>
button {
  margin-top: 6em;
}
</style>
