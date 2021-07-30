// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'



//导入fortawesome

import { library } from '@fortawesome/fontawesome-svg-core'
// 事实上官方不推荐使用下面的方式将整个库引入到项目中
import { fas } from '@fortawesome/free-solid-svg-icons'
// 如果确实需要下面的图标就把注释取消
// import { far } from '@fortawesome/free-regular-svg-icons'
// import { fab } from '@fortawesome/free-brands-svg-icons'


//引入axios
import axios from 'axios'
Vue.prototype.$axios = axios;

import VueResource from 'vue-resource'
Vue.use(VueResource);

//引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


import echarts from 'echarts'

//注意：echarts3.0以后已经不包含地图文件了，需要手动引入china.js文件
import 'echarts/map/js/china.js'
import 'echarts/map/js/world.js'

//将echarts绑定到vue的原型上
Vue.prototype.$echarts = echarts 




import {
  FontAwesomeIcon,
  FontAwesomeLayers,
  FontAwesomeLayersText
} from '@fortawesome/vue-fontawesome'

// library.add与import对应
library.add(fas)
// library.add(far)
// library.add(fab)



//使用字体图标
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)




Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
