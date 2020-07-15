import Vue from 'vue'
import VueRouter from 'vue-router'
import ListOfRoles from '../views/ListOfRoles.vue'
import AddEditRole from '../views/AddEditRole.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ListOfRoles',
    component: ListOfRoles
  },
  {
    path: '/add-role/',
    name: 'AddRole',
    component: AddEditRole
  },
  {
    path: '/edit-role/:id',
    name: 'EditRole',
    component: AddEditRole
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

export default router
