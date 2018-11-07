import Vue from 'vue'
import Router from 'vue-router'
import viewmenu from '../views/menu'

// TreeMenu2
import App from '../App'
import TreeViewDetail from '../components/TreeMenu2/TreeViewDetail'


Vue.use(Router)

export const constantRouterMap = [
  { path: 'sys_resource_index', component: () => viewmenu },

  // TreeMenu2
  {
	path: '/detail/quickstart',
	name: 'quickstart',
	component: TreeViewDetail
  }
]

export default new Router({
  linkActiveClass: 'selected', // TreeMenu2
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

