<template>
  <div :class="inputContainerClass">
    <label :for="id" style="display: block">{{ label }}</label>
    <drop-down-list
      :id="id"
      style="display: inline"
      :name="name"
      :ref="name"
      :type="type"
      :placeholder="placeHolder"
      v-model="content"
      :data-source="dataSource"
      :data-text-field="dataTextField"
      :data-value-field="dataValueField"
      :filter="'contains'"
      @input="handleInput(content)"
    />
  </div>
</template>
<script>
import InputCommons from "./InputCommons.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "@progress/kendo-theme-default/dist/all.css";

import {
  DropDownList,
  DropdownsInstaller
} from "@progress/kendo-dropdowns-vue-wrapper";
import '@progress/kendo-ui/js/kendo.dropdownlist'
export default {
  extends: InputCommons,
  components: { DropDownList },
  use: { DropdownsInstaller }
};
</script>
<style>
/* .k-dropdown{
  display: inline !important;
} */
</style>
