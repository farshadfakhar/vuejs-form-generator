<template>
  <div>
    <v-validate-observer ref="gForm">
      <v-validate v-for="(i, index) in schema" :key="index" :rules="i.rules" v-slot="{ errors }" :name="i.label">
        <text-input
          :type="i.type"
          :label="i.label"
          :name="i.key"
          :id="i.id"
          :classes="i.classes"
          v-model="content[i.key]"
          :rules="i.rules"
          :place-holder="i.placeHolder"
          @input="handleInput()"
        />
        <span>{{ errors[0] }}</span>
      </v-validate>
      <button @click="onSubmit">submit</button>
    </v-validate-observer>
  </div>
</template>
<script>
import TextInput from "./TextInput.vue";
export default {
  props: {
    /**
     * Action on submit
     */
    onSubmit: {
      type: Function
    },
    /**
     * --
     */
    value: {
      default: {}
    },
    /**
     * Form Schema
     */
    schema: {
      type: Array
    }
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
  components: { TextInput },
  methods: {
    handleInput() {
      this.$emit("input", this.content);
    },
    /**
     * Validate Form
     * access it by $refs
     */
    validate() {
      return this.$refs.gForm.validate();
    }
  }
};
</script>
