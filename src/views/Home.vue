<template>
	<div class="home">
		<div class="side-bar">
			<Tree-view></Tree-view>
		</div>
		<div class="continer">
			<router-view></router-view>
		</div>
	</div>
</template>
<script>
	import TreeView from "../components/TreeMenu2/index.vue";
	export default {
		components: {
			TreeView
		},
		name: "Home"
	};
</script>
<style scoped>
	.side-bar {
		width: 300px;
		height: 100%;
		overflow-y: auto;
		overflow-x: hidden;
		font-size: 14px;
		position: absolute;
		top: 0;
		left: 0;
	}

	.continer {
		padding-left: 320px;
	}
</style>
