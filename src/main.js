import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入自定义组件 news-item
import Components from '@/components'

import 'normalize.css/normalize.css'
import '@/assets/styles/common.less'

import { Button, Row, Col, Menu, MenuItem, Card } from 'element-ui'

Vue.use(Button)
Vue.use(Row)
Vue.use(Col)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Card)

// 注册自定义组件
Vue.use(Components)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
