<!-- store全部 -->
<template>
	<div class="tree-view-menu">
		<Tree-view-item :menus="menus"></Tree-view-item>
	</div>
</template>

<script>
	import TreeViewItem from './TreeViewItem'
	import { mapGetters } from 'vuex'

	export default {
		name: 'TreeViewMenu',
		computed: {
			...mapGetters([
				'menus'
			])
		},
		components: {
			TreeViewItem
		},
		created() {
			this.getData()
		},
		methods: {
			getData() {
				var that = this
				that.$store.dispatch('getMenus')
			}
		}
	}
</script>

<style scoped>
	.tree-view-menu {
		width: 300px;
		height: 100%;
		overflow-y: auto;
		overflow-x: hidden;
	}

	.tree-view-menu::-webkit-scrollbar {
		height: 6px;
		width: 6px;
	}

	.tree-view-menu::-webkit-scrollbar-trac {
		-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
		box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
	}

	.tree-view-menu::-webkit-scrollbar-thumb {
		background-color: #6e6e6e;
		outline: 1px solid #333;
	}

	.tree-view-menu::-webkit-scrollbar {
		height: 4px;
		width: 4px;
	}

	.tree-view-menu::-webkit-scrollbar-track {
		-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
		box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
	}

	.tree-view-menu::-webkit-scrollbar-thumb {
		background-color: #6e6e6e;
		outline: 1px solid #708090;
	}
</style>
