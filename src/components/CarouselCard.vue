<template>
  <div
    class="carousel-item"
    :class="`${isActive} ? ${active} : `"
    data-bs-interval="2000"
  >
    <img
      src="../../src/assets/images/commodore-add-sm.png"
      class="img-fluid"
      alt="..."
    />
    <div class="carousel-caption d-none d-md-block"></div>
  </div>
</template>

<script>
export default {
  props: {
    isActive: Boolean,
  },
  data() {
    return {
      active: "active",
    };
  },
  methods: {},
};
</script>

<style></style>
