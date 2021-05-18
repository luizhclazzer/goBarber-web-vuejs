import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vSelect from 'vue-select';
import VueSweetalert2 from 'vue-sweetalert2';
import Vuelidate from 'vuelidate';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faArrowLeft,
  faEnvelope,
  faLock,
  faSignInAlt,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import 'sweetalert2/dist/sweetalert2.min.css';
import 'vue-select/dist/vue-select.css';

library.add(faEnvelope, faLock, faSignInAlt, faArrowLeft, faUser);

Vue.use(VueSweetalert2);
Vue.component('v-select', vSelect);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(Vuelidate);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
