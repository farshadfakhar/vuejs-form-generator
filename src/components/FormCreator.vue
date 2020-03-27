<template>
  <v-validate-observer ref="gForm">
    <div :class="validationsContainerClass">
      <div
        v-for="(i, index) in schema"
        :key="index"
        :class="validationContainerClass"
      >
        <v-validate :rules="i.rules" v-slot="{ errors }" :name="i.label">
          <component
            v-bind:is="bestInput(i.type)"
            :type="i.type"
            :label="i.label"
            :name="i.key"
            :id="i.id"
            :classes="i.classes"
            v-model="content[i.key]"
            :rules="i.rules"
            :place-holder="i.placeHolder"
            :input-container-class="inputContainerClass"
            :input-class="inputClass"
            :data-source="i.dataSource"
            :data-text-field="i.dataTextField"
            :data-value-field="i.dataValueField"
            @input="handleInput()"
          ></component>
          <span>{{ errors[0] }}</span>
        </v-validate>
      </div>
    </div>
    <button @click="onSubmit">submit</button>
  </v-validate-observer>
</template>
<script>
import TextInput from "./TextInput.vue";
import TextArea from "./TextArea.vue";
import TalkhabiDatePicker from "./TalkhabiDatePicker.vue";
import KendoMultiSelect from "./KendoMultiSelect.vue";
import KendoSelect from "./KendoSelect.vue";
import CheckBox from "./CheckBox.vue";
export default {
  props: {
    value: {
      default: {}
    },
    /**
     * Action on submit
     */
    onSubmit: {
      type: Function
    },
    /**
     * Form Schema
     */
    schema: {
      type: Array
    },
    validationsContainerClass: {
      type: String
    },
    validationContainerClass: {
      type: String
    },
    inputContainerClass: {
      type: String
    },
    inputClass: {
      type: String
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
  components: { TextInput, TextArea },
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
    },

    bestInput(type) {
      if (type == "textarea") return TextArea;
      if (type == "date") return TalkhabiDatePicker;
      if (type == "select") return KendoSelect;
      if (type == "multiselect") return KendoMultiSelect;
      if (type == "checkbox") return CheckBox;
      return TextInput;
    }
  }
};
</script>
