<template>
  <div id="app">
    <form-creator
      ref="form"
      v-model="data"
      :schema="schema"
      :on-submit="onSubmit"
      validations-container-class="row"
      validation-container-class="col-lg-2"
      input-container-class="form-group"
      input-class="form-control"
    />
  </div>
</template>

<script>
import FormCreator from "./components/FormCreator.vue";

export default {
  name: "App",
  components: {
    FormCreator
  },
  data() {
    return {
      data: {},
      schema: [
        {
          type: "textarea",
          name: "name",
          label: "Name",
          classes: { "form-control": true },
          rules: "digits:11|required",
          key: "name"
        },
        {
          type: "text",
          name: "phone",
          label: "Cell Phone",
          classes: { "form-control": true },
          rules: "required",
          key: "tel"
        },
        {
          type: "date",
          name: "birt",
          label: "Birth Day",
          classes: { "form-control": true },
          rules: "required",
          key: "tel"
        }
      ]
    };
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate().then(result => {
        if (result) {
          alert("Form submitted!");
        }
      });
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
