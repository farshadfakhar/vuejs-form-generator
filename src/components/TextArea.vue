<template>
  <div :class="inputContainerClass">
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
</template>
<script>
import InputCommons from "./InputCommons.vue";
export default {
  extends: InputCommons
};
</script>
