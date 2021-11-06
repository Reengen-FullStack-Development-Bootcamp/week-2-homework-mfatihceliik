import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


import ProductList from './components/ProductList'
import ProductDetail from './components/ProductDetail'
import Home from './components/Home'


Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.use(IconsPlugin)

const routes = [
  { path: '/', name: "Home" ,component: Home },
  { path: '/ProductList', name: "ProductList", component: ProductList },
  { path: '/ProductDetail/:id', name: "ProductDetail", component: ProductDetail }
]

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
