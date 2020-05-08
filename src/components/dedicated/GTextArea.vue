<template>
  <div :class="validationContainerClass">
    <v-validate :rules="rules" v-slot="{ errors }" :name="label">
      <div class="form-group">
        <label :for="id">{{ label }}</label>
        <textarea
          :id="id"
          :name="name"
          :ref="name"
          :type="type"
          :class="inputClass"
          :placeholder="placeHolder"
          v-model="content"
          @input="handleInput(content)"
        />
      </div>
      <span>{{ errors[0] }}</span>
    </v-validate>
  </div>
</template>
<script>
import InputCommons from "./InputCommons.vue";
export default {
  extends: InputCommons
};
</script>
