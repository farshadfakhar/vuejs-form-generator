import Vue from "vue";
import App from "./App.vue";

require("popper.js").default;
require("jquery");
require("bootstrap");

import "./veeValidate";




// Add a rule.

Vue.config.productionTip = true;

new Vue({
  render: h => h(App)
}).$mount("#app");
