<template>
	<div class="home">
		<p>{{msg}}</p>
		<img src="src/images/default.jpg" alt="" />
	</div>
</template>

<script>

export default {
	name: 'App',
	data() {
		return {
			msg: 'Hello world!'
		}
	}
}
</script>

<style scoped>
	.home {
		/* background-image: url('../images/default.jpg'); */
	}
	img {
		width: 100px;
		height: 100px;
	}
</style>