import Vue from 'vue'
import App from './App.vue'
import axios from './http'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import moment from 'moment'

import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$axios = axios;

Vue.prototype.moment = moment
//时间格式化过滤器
Vue.filter('dateFormat', function (dateStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
  return moment(dateStr).format(pattern)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
