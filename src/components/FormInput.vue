<template>
  <div class="form-group">
    <label :for="id">{{ labelText }} </label>
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
/*Just to see what it changes*/
.form-group {
  font-weight: bold;
}

.req {
  color: red;
}
</style>
