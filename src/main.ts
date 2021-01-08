import Vue from "vue";
import App from "@/App.vue";
import "@/registerServiceWorker";
import router from "@/router";
import store from "@/store";
import "materialize-css/dist/css/materialize.min.css";
import "material-design-icons/iconfont/material-icons.css";
import "@/assets/css/styles.scss";
import Vuelidate from "vuelidate";
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';  
import * as conf from '@/conf'
Vue.use(Vuelidate);
Vue.prototype.$mapFields = Vue;

Vue.config.productionTip = false;

firebase.initializeApp(conf.config.firebase);

let app: any = null;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  }
});


