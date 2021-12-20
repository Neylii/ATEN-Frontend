<template>
  <div class="form-group">
    <label class="label" :for="id">{{ labelText }} </label>
    <input
      :type="type"
      :id="id"
      :placeholder="placeholder"
      :value="modelValue"
      @input="updateInput"
      class="form-control"
      :required="requiredBool"
    />
    <span class="req" v-if="requiredBool"> *</span>
  </div>
</template>

<script>
export default {
  name: "FormInput",
  props: {
    labelText: {
      type: String,
    },
    title: {
      type: String,
    },
    type: {
      type: String,
      default: "text",
    },
    class: {
      type: String,
      default: "",
    },
    id: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    requiredBool: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped>
.form-group {
  display: grid;
  grid-template-columns: 1fr 0.8fr 0.3fr;
  font-weight: bold;
  text-align: right;
  margin-bottom: 0.3em;
}

.label {
  margin-right: 0.5em;
  margin-top: 0.2em;
  font-size: larger;
}

.form-control {
  text-align: match-parent;
}

.req {
  margin-left: 0.2em;
  text-align: left;
  color: red;
  font-size: x-large;
}
</style>
