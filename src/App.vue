<template>
  <div id="app" class="k-rtl">
    <v-validate-observer ref="test">
      <div class="row">
        <g-input
          type="password"
          name="farshad"
          label="نام بابا"
          validation-container-class="col-lg-2"
          input-class="form-control"
          v-model="farshad.name"
        />
        <g-check-box
          name="maried"
          label="ازدواج"
          validation-container-class="col-lg-1"
          input-class="form-control"
          v-model="farshad.maried"
          color="info"
        />
        <g-multi-select
          type="password"
          name="farshad"
          label="نام بابا"
          validation-container-class="col-lg-2"
          input-class="form-control"
          rules="required"
          v-model="farshad.name"
          :data-source="haha"
          data-text-field="name"
          data-value-field="id"
        />
        <g-select
          type="password"
          name="farshad"
          label="نام بابا"
          validation-container-class="col-lg-2"
          input-class="form-control"
          rules="required"
          v-model="farshad.name"
          :data-source="haha"
          data-text-field="name"
          data-value-field="id"
        />
        <g-date-picker
          type="password"
          name="farshad"
          label="نام بابا"
          validation-container-class="col-lg-2"
          input-class="form-control"
          v-model="farshad.date"
        />
        <g-text-area
          type="password"
          name="farshad"
          label="نام بابا"
          validation-container-class="col-lg-2"
          input-class="form-control"
          v-model="farshad.dd"
        />
        <button @click="testsub">submit</button>
      </div>
    </v-validate-observer>
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
import GInput from "./components/dedicated/GInput.vue";
import GCheckBox from "./components/dedicated/GCheckBox.vue";
import GMultiSelect from "./components/dedicated/GMultiSelect.vue";
import GSelect from "./components/dedicated/GSelect.vue";
import GDatePicker from "./components/dedicated/GDatePicker.vue";
import GTextArea from "./components/dedicated/GTextArea.vue";


export default {
  name: "App",
  components: {
    FormCreator,
    GInput,
    GCheckBox,
    GMultiSelect,
    GSelect,
    GDatePicker,
    GTextArea
  },
  data() {
    return {
      data: {},
      farshad: {},
      haha: [
        { id: 1, name: "foot" },
        { id: 2, name: "bal" },
        { id: 3, name: "basklet" }
      ],
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
            { id: 1, name: "foot" },
            { id: 2, name: "bal" },
            { id: 3, name: "basklet" }
          ],
          dataTextField: "name",
          dataValueField: "id"
        },
        {
          type: "select",
          name: "sex",
          label: "Sex",
          classes: {},
          rules: "required",
          key: "sex",
          dataSource: [
            { id: 1, name: "male" },
            { id: 2, name: "female" }
          ],
          dataTextField: "name",
          dataValueField: "id"
        }
      ]
    };
  },
  mounted() {},
  methods: {
    onSubmit() {
      this.$refs.form.validate().then(result => {
        if (result) {
          alert("Form submitted!");
        }
      });
    },
    testsub() {
      this.$refs.test.validate().then(result => {
        if (result) {
          alert("Form hoooy!");
        }
      });
    }
  }
};
</script>

<style scoped>
.k-rtl {
  text-align: right;
}
</style>
