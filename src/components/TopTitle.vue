<template>
  <div class="title"></div>
  <h1>{{ msg }}</h1>
</template>

<script>
export default {
  name: "TopTitle",
  props: {
    msg: String,
  },
};
</script>
<style scoped>
.title {
  margin-top: 1em;
}
</style>
