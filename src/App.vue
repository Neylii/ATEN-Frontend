<template>
  <Navbar></Navbar>
  <router-view id="router-view" />
  <Footer />
  <login />
</template>

<script>
import Login from "./components/Login.vue";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Navbar,
    Login,
    Footer,
  },
  mounted() {
    this.$store.commit("updateUsernameFromCookie");
    this.$store.dispatch("getAllProducts");
  },
};
</script>
<style>
@import "./assets/style/cssConsts.css";
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#router-view {
  margin-top: 6em;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
