<template>
  <div>
    <label :for="id">{{ label }}</label>
    <input
      :id="id"
      :name="name"
      :ref="name"
      :type="type"
      :class="classes"
      :placeholder="placeHolder"
      v-model="content"
      @input="handleInput(content)"
    />
  </div>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      default: ""
    },
    id: {
      default: Date.now()
    },
    type: {
      type: String,
      default: "text"
    },
    classes: {
      type: Object
    },
    placeHolder: {
      type: String
    },
    rules: {
      type: String
    },
    name: {
      type: String
    },
    value: {}
  },
  watch: {
    value: {
      handler(val) {
        this.content = val;
      },
      deep: true
    }
  },
  data() {
    return {
      content: this.value
    };
  },
  methods: {
    handleInput() {
      this.$emit("input", this.content);
    }
  }
};
</script>
