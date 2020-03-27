<template>
  <div id="app" class="k-rtl">
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
          classes: {},
          rules: "required",
          key: "tel"
        },
        {
          type: "checkbox",
          name: "sure",
          label: "Sure?",
          classes: {},
          rules: "required",
          key: "sure"
        },
        {
          type: "checkbox",
          name: "sure",
          label: "Sure?",
          classes: {},
          rules: "required",
          key: "sure"
        },
        {
          type: "multiselect",
          name: "likes",
          label: "Sports",
          classes: {},
          rules: "required",
          key: "likes",
          dataSource: [
            {id: 1, name: 'foot'},
            {id: 2, name: 'bal'},
            {id: 3, name: 'basklet'},
          ],
          dataTextField: 'name',
          dataValueField: 'id'
        },
        {
          type: "select",
          name: "sex",
          label: "Sex",
          classes: {},
          rules: "required",
          key: "sex",
          dataSource: [
            {id: 1, name: 'male'},
            {id: 2, name: 'female'},
          ],
          dataTextField: 'name',
          dataValueField: 'id'
        }
      ]
    };
  },
  mounted() {
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

<style scoped>
.k-rtl{
  text-align: right;
}
</style>
