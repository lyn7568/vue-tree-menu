<template>
  <div class="navMenu">
		<div v-for="item in navMenus" :key="">
			<el-submenu :index="item.res ? item.res : item.caption" v-if="item.children">
				<template slot="title">
					<i :class="item.icon">+</i>
					<span>{{item.caption}}</span>
				</template>
				<NavMenu :navMenus="item.children"></NavMenu>
			</el-submenu>
			<el-menu-item :index="item.res" v-else>
				<template slot="title">
					<i :class="item.icon">*</i>
					<span>{{item.caption}}++++</span>
				</template>
			</el-menu-item>
		</div>
	</div>
</template>

<script>
import { getIFrameUrl } from '../../utils/index'
export default {
	name: 'NavMenu',
	props: ['navMenus'],
	data() {
		return {}
	},
	methods: {}
}
</script>

<style scoped>

</style>