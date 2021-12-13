<template>
  <div class="navbar">
    <ul>
      <li><a href="#">Hem</a></li>
      <li><a href="#Products">Produkter</a></li>
      <li><a href="#About">Om oss</a></li>
      <li><a href="#CreateAccount">Skapa konto</a></li>
    </ul>
  </div>
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
}
</style>
