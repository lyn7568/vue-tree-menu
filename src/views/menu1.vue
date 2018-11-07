<template>
  <div>
    <el-menu
    	router
    	:default-active="defaultActive"
    	class="el-menu-vertical-demo"
    	active-text-color='#29A88D'
    	background-color="#272D34"
    	text-color="#fff"
    	unique-opened>
			<NavMenu :navMenus="menusArr"></NavMenu>
    </el-menu>
  </div>
</template>

<script>
import request from '../utils/request'
import NavMenu from '../components/TreeMenu1'
export default {
	name: 'leftMenus',
  components: {
    NavMenu
  },
  data () {
  	return {
  		defaultActive: '0',
  		menusArr: []
  	}
  },
  created () {
  	this.getData()
  },
  methods: {
  	getData() {
  		var that = this
  		var date = new Date()
  		var timer = date.getTime().toString()
  		request.get('./static/menu.json?t='+ timer, {}, function(res) {
  			that.menusArr = res.data
  		})
  	}
  }
}
</script>