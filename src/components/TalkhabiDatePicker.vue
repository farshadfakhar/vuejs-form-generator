<template>
  <div :class="inputContainerClass">
    <label :for="id">{{ label }}</label>
    <date-picker
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
</template>
<script>
import VuePersianDatetimePicker from "vue-persian-datetime-picker";
import InputCommons from "./InputCommons.vue";
export default {
  extends: InputCommons,
  components: {
    datePicker: VuePersianDatetimePicker
  }
};
</script>
