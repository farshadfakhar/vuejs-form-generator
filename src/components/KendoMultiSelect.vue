<template>
  <div :class="inputContainerClass">
    <label :for="id">{{ label }}</label>
    <multi-select
      :id="id"
      :name="name"
      :ref="name"
      :type="type"
      :placeholder="placeHolder"
      v-model="content"
      :data-source="dataSource"
      :data-text-field="dataTextField"
      :data-value-field="dataValueField"
      @input="handleInput(content)"
    />
  </div>
</template>
<script>

import InputCommons from "./InputCommons.vue";
export default {
  extends: InputCommons,
};
</script>
