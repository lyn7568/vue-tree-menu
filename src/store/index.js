import Vue from 'vue'
import Vuex from 'vuex'
import menusModule from './modules/menusModule'
import getters from './getters'
Vue.use(Vuex);
const store = new Vuex.Store({
	modules: {
		menusModule
	},
	getters
})
export default store;
