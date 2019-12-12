<template>
	<div class="app">
		<p>{{msg}}</p>
		<home></home>
	</div>
</template>

<script>
import Home from '@/components/home.vue'
export default {
	name: 'App',
	components: {
		Home
	},
	data() {
		return {
			msg: 'Vue'
		}
	},
	created() {
		new Promise((re, rj) => {
			console.log(1111)
		})
	}
}
</script>

<style scoped>
	.app {
		font-size: 20px;
		color: grey;
		display: flex;
	}
</style>