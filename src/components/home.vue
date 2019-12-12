<template>
	<div class="home">
		<p>{{msg}}</p>
		<img src="https://si.geilicdn.com/img-39650000016ec6e2190d0a219248-unadjust_123_45.png" alt="">
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

	}
	img {
		width: 100px;
		height: 100px;
	}
</style>