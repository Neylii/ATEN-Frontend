<template>
  <Navbar></Navbar>
  <router-view id="router-view" />
  <login />
</template>

<script>
import Login from "./components/Login.vue";
import Navbar from "./components/Navbar.vue";
import * as utils from "@/assets/utils.js";

export default {
  components: {
    Navbar,
    Login,
  },
  methods: {
    async doWhenMount() {
      let username = await utils.getCookie("username");
      if (username) {
        let json = await this.$store.dispatch("checkIfUserExists", {
          username: username,
        });
        if (!json) {
          utils.deleteCookie("username");
        } else {
          this.$store.commit("updateUsernameFromCookie");
        }
      }
    },
  },
  mounted() {
    this.doWhenMount();
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
