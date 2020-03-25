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
      ]
    };
  },
  mounted() {
    var vm = this;
    setTimeout(function() {
      vm.schema = [
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
        }
      ];
    }, 4000);
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

<style></style>
