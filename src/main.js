import Vue from "vue";
import App from "./App.vue";
require("popper.js").default;
require("jquery");
require("bootstrap");
import "bootstrap/dist/css/bootstrap.min.css"
import '@progress/kendo-theme-default/dist/all.css'
import "./veeValidate";

import {
  MultiSelect,
  DropdownsInstaller
} from "@progress/kendo-dropdowns-vue-wrapper";
import '@progress/kendo-ui/js/kendo.multiselect'

Vue.use(DropdownsInstaller);
Vue.component("multi-select", MultiSelect);


// Add a rule.

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
