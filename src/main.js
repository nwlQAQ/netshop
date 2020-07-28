// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import "./assets/css/reset.css"
import "./assets/js/rem"
Vue.config.productionTip = false
import "animate.css"
import "./assets/css/iconfont.css"

import common from "./common"
for(var i in common){
  Vue.component(i,common[i])
}

import filter from "./filter"
for(var i in filter){
  Vue.filter(i,filter[i])
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
