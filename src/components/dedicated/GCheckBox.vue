<template>
  <div :class="validationContainerClass">
    <v-validate :rules="rules" v-slot="{ errors }" :name="label">
      <div class="form-group">
        <label :for="id">{{ label }}</label>
        <p-check
          :id="id"
          :name="name"
          :ref="name"
          v-model="content"
          @input.native="handleInput(content)"
          :color="color"
        />
        <span>{{ errors[0] }}</span>
      </div>
    </v-validate>
  </div>
</template>
<script>
import InputCommons from "./InputCommons.vue";
import "pretty-checkbox/dist/pretty-checkbox.min.css";
import PrettyCheckbox from "pretty-checkbox-vue";
import PrettyCheck from "pretty-checkbox-vue/check";

export default {
  extends: InputCommons,
  components: { "p-check": PrettyCheck },
  use: { PrettyCheckbox }
};
</script>
