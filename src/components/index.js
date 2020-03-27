import Vue from "vue";
import FormCreator from './FormCreator'

const Components = {
    'form-creator': FormCreator,
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;
