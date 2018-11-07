<template>
	<div id="app">
		<!-- <menuNav></menuNav> -->
		<!-- <menuNav1></menuNav1> -->
		<Home></Home>
	</div>
</template>

<script>
	import menuNav from './views/menu.vue'
	import menuNav1 from './views/menu1.vue'
	import Home from "./views/Home"
	export default {
		name: 'App',
		components: {
			menuNav,
			menuNav1,
			Home
		}
	}
</script>
<style>
	* {
		padding: 0;
		margin: 0;
	}

	#app {
		font-family: "Avenir", Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
	}

	html,
	body,
	#app,
	.home {
		height: 100%;
	}

	html,
	body {
		overflow: hidden;
	}
</style>
