import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css' //Vuesax styles
import 'material-icons/iconfont/material-icons.css'
import 'boxicons/css/boxicons.min.css'
import vuetify from './plugins/vuetify';
import Notifications from 'vue-notification'
import '@progress/kendo-theme-default/dist/all.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// Optionally install the BootstrapVue icon components plugin
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.config.productionTip = false


Vue.use(Vuesax,Notifications ,{
  //Options
})
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
