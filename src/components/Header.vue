<template>
	<div class="header">
		<nav>Disregard That | Podcasts | About | Social</nav>
		<img
			src="../assets/disregard-that-podcast.png"
			alt="Disregard that logo."
		/>
		<p>Disregard that blurb.</p>
		<p>Podcast Links.</p>
		<p>Shameless plugs.</p>
	</div>
</template>

<script lang="ts">
	import { Component, Prop, Vue } from "vue-property-decorator";

	@Component
	export default class Header extends Vue {
		@Prop() private msg!: string;
	}
</script>

<style scoped>
	.header {
		color: #d3d3d3;
		height: 100vh;
		background-color: #1b5471;
		background-image: linear-gradient(to bottom right, #1b5471, #55899e);
	}

	nav {
		padding: 50px;
	}
	img {
		height: 40vh;
		padding: 30px;
	}
</style>
