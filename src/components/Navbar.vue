<template>
  <nav class="navbar navbar-expand-md navbar-white bg-dark">
    <div class="container">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <a class="navbar-brand" @click="handleProductClick">
          <img src="../assets/images/ATEN.png" alt="" width="65" height="35" />
        </a>
        <ul class="navbar-nav me-auto mb-2 mb-lg-1">
          <li class="nav-item">
            <a class="nav-link" @click="handleProductClick">Produkter</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" @click="handleAboutUsClick">Om oss</a>
          </li>
        </ul>

        <form class="d-flex" v-if="$route.name === 'Products'">
          <input
            class="form-control mx-1"
            type="search"
            placeholder="Search"
            aria-label="Search"
            v-model="message"
          />
        </form>
      </div>

      <CartDropdown />

      <div class="logged-in-user-container" v-if="$store.state.loginStatus">
        <p>{{ $store.state.user.username }}</p>
        <button class="btn btn-light mx-1" @click="handleLogoutClick">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-person-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
            />
          </svg>
          Logga ut
        </button>
      </div>
      <button class="btn btn-light mx-1" @click="handleLoginClick" v-else>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-person-fill"
          viewBox="0 0 16 16"
        >
          <path
            d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
          />
        </svg>
        Logga in
      </button>
    </div>
  </nav>
</template>

<script>
import CartDropdown from "../components/CartDropdown.vue";
import * as utils from "../assets/utils.js";
/**
 * Navigationbar component. On bigger screens the bar is in a fixed position at the top.
 * Changes style and position to fixed at the bottom when the screen is smaller.
 */
export default {
  components: {
    CartDropdown,
  },
  name: "Navbar",
  methods: {
    handleAboutUsClick() {
      this.$router.push({ name: "About" });
    },
    handleProductClick() {
      this.$router.push({ name: "Products" });
    },
    handleLoginClick() {
      this.$store.commit("changeLoginScreen", true);
    },
    handleLogoutClick() {
      utils.deleteCookie("username");
      this.$store.commit("changeLoginStatus", false);
    },
  },
  /**
   * the message function checks the search state and returns the updated search value.
   */
  computed: {
    message: {
      get() {
        return this.$store.state.search;
      },
      set(value) {
        this.$store.commit("updateMessage", value);
      },
    },
  },
};
</script>

<style scoped>
.navbar {
  width: 100%;
  background-color: #294c53;
  position: fixed;
  z-index: 10;
  bottom: 0;
  max-height: 6em;
}
ul {
  display: flex;
  justify-content: space-evenly;
  gap: 1em;
}

li {
  list-style: none;
}

a {
  font-size: 18px;
  color: white;
  text-decoration: none;
}

p {
  font-size: 18px;
  color: white;
  padding: 0 1em 0;
  margin: 0;
}

.logged-in-user-container {
  display: flex;
  align-items: center;
}

.navbar-nav {
  cursor: pointer;
}

.navbar-brand {
  cursor: pointer;
}

@media screen and (min-width: 360px) {
}

@media screen and (min-width: 768px) {
  .navbar {
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    background-color: #53787f;
  }

  .navbar-brand {
    display: flex;
    align-items: center;
  }
}
</style>
