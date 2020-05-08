<template>
  <div :class="validationContainerClass">
    <v-validate :rules="rules" v-slot="{ errors }" :name="label">
      <div class="form-group">
        <label :for="id">{{ label }}</label>
        <div>
          <drop-down-list
            :id="id"
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
      </div>
      <span>{{ errors[0] }}</span>
    </v-validate>
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
import "@progress/kendo-ui/js/kendo.dropdownlist";
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
