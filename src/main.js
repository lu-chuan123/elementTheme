import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from "element-ui";
import "./kk.scss";
// import "element-ui/lib/theme-chalk/index.css";
import "./themes/theme/index.css";

// import "./element-variables.scss";

Vue.config.productionTip = false;
Vue.use(ElementUI);
new Vue({
  router,
  // eslint-disable-next-line prettier/prettier
  render: (h) => h(App)
}).$mount("#app");
