<template>
  <!--
  <div class="navbar">
    <ul>
      <li><a href="#">Hem</a></li>
      <li><a href="#Products">Produkter</a></li>
      <li><a href="#About">Om oss</a></li>
    </ul>
  </div>-->

  <nav class="navbar navbar-expand-md navbar-white bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="/src/assets/images/ATEN.png" alt="" width="30" height="24" />
      </a>
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
        <ul class="navbar-nav me-auto mb-2 mb-lg-1">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#"
              >Startsida</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Produkter</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#">Om oss</a>
          </li>
        </ul>
        <form class="d-flex">
          <input
            class="form-control mx-1"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success mx-1" type="submit">
            Search
          </button>
        </form>
      </div>
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
          /></svg
        >View Cart
      </button>
      <button class="btn btn-light mx-1">
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
        Mitt konto
      </button>
    </div>
  </nav>
</template>

<script>
/**
 * Navigationbar component. On bigger screens the bar is in a fixed position at the top.
 * Changes style and position to fixed at the bottom when the screen is smaller.
 */
export default {
  components: {},
  name: "Navbar",
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
