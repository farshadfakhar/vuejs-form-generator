<template>
  <div :class="inputContainerClass">
    <label :for="id">{{ label }}</label>
    <p-check
      :id="id"
      :name="name"
      :ref="name"
      :type="type"
      :placeholder="placeHolder"
      v-model="content"
      :data-source="dataSource"
      :data-text-field="dataTextField"
      :data-value-field="dataValueField"
      @input.native="handleInput(content)"
      color="success"
    />
  </div>
</template>
<script>
import InputCommons from "./InputCommons.vue";
import "pretty-checkbox/dist/pretty-checkbox.min.css";
import PrettyCheckbox from "pretty-checkbox-vue";
import PrettyCheck from "pretty-checkbox-vue/check";

export default {
  extends: InputCommons,
  components: { 'p-check': PrettyCheck },
  use: { PrettyCheckbox }
};
</script>
