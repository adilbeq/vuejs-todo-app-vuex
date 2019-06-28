import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AddNew from '@/components/AddNew'
import Errorr from '@/components/Error'
import TodoInfo from '@/components/TodoInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/add',
      name: 'AddNew',
      component: AddNew
    },
    {
      path: '*',
      name: 'Errorr',
      component: Errorr
    },
    {
      path: '/info/:id/:desc/:n',
      name: 'info',
      component: TodoInfo
    }
  ]
})
