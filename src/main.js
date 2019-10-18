import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';
Vue.prototype.axios = axios;
import "./font_f8u31k1ug5/iconfont.css"

import {Button,NavBar,Tabbar, TabbarItem,Icon,Field,Popup,Picker,Tab, Tabs} from 'vant';
Vue.use(Button).use(NavBar).use(Tabbar).use(TabbarItem).use(Icon).use(Field).use(Popup).use(Picker).use(Tab).use(Tabs);
import 'vant/lib/index.css';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
