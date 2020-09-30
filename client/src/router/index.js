import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Listagem from '@/components/Listagem'
import CreateRest from '@/components/CreateRest'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: HelloWorld
    },
    {
      path: '/rest/listagem',
      name: 'rest-listagem',
      component: Listagem
    },
    {
      path: '/rest/create',
      name: 'rest-create',
      component: CreateRest
    }
  ]
})
