<template>
	<div class="about" id="about">
		<div class="title">About</div>
		<div class="center-flex">
			<div class="content">
				<img class="avatar" src="../assets/rama.jpg" alt="Rama" />
			</div>
			<div class="content">
				<img class="avatar" src="../assets/josh.jpg" alt="Josh" />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import { Component, Prop, Vue } from "vue-property-decorator";

	@Component
	export default class About extends Vue {}
</script>

<style scoped>
	.about {
		background-image: linear-gradient(to bottom, #55899e, #99aab4);
		background-color: #1b5471;
		color: #d3d3d3;
		padding: 50px;
	}
	.title {
		padding: 50px;
		font-size: 2em;
		font-weight: 900;
	}
	.content {
		width: 50vh;
	}
	.avatar {
		width: 30vh;
		border: 3px solid #ececec;
		border-radius: 500px;
		margin: 8px;
	}
	.avatar:hover {
		border: 5px solid #1b5471;
		margin: 6px;
	}
</style>
