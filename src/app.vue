<template>
	<div class="app">
		<p>{{msg}}</p>
		<home></home>
	</div>
</template>

<script>
import Home from './components/home.vue'
export default {
	name: 'App',
	components: {
		Home
	},
	data() {
		return {
			msg: 'Vue'
		}
	}
}
</script>

<style scoped>
	.app {

	}
</style>