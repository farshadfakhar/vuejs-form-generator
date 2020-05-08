<template>
  <div :class="validationContainerClass">
    <v-validate :rules="rules" v-slot="{ errors }" :name="label">
      <div class="form-group">
        <label :for="id">{{ label }}</label>
        <date-picker
          :id="id"
          :name="name"
          :ref="name"
          :type="type"
          :placeholder="placeHolder"
          v-model="content"
          @input="handleInput(content)"
          :clearable="true"
          :auto-submit="true"
          :editable="true"
          format="YYYY-MM-DD"
          display-format="jYYYY/jMM/jDD"
          :locale="locale"
          :locale-config="datePickerLocalConfig"
          :day-change-shortcut="true"
          :color="color"
        />
        <span>{{ errors[0] }}</span>
      </div>
    </v-validate>
  </div>
</template>
<script>
import VuePersianDatetimePicker from "vue-persian-datetime-picker";
import InputCommons from "./InputCommons.vue";
export default {
  extends: InputCommons,
  components: {
    datePicker: VuePersianDatetimePicker
  },
  props:{
    locale: {
      type: String,
      default: 'fa,en'
    },
    color: {
      type: String,
      default: '#e91e63'
    }
  },
  data() {
    return {
      datePickerLocalConfig: {
        fa: {
          displayFormat: "jYYYY/jMM/jDD",
          lang: { label: "شمسی" }
        },
        en: {
          displayFormat: "YYYY/MM/DD",
          lang: { label: "Gregorian" }
        }
      }
    };
  }
};
</script>
