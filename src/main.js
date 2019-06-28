import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './store/store';

Vue.use(Vuex)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  data(){
    return{
    }
  },
  router,
  store,
  components: { App },
  template: '<App/>'
})
