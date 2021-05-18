<template>
	<div class="header">
		<div class="nav space-flex">
			<div class="title">
				<div class="title">DISREGARD</div>
				<div class="title">THAT</div>
			</div>
			<div class="social space-flex">
				<a href="https://twitter.com/disregard_that" target="_blank">
					<unicon name="twitter" fill="#e8eae9" />
				</a>
				<!-- <a href="">
					<unicon name="facebook-f" fill="#d3d3d3" />
				</a>
				<a href="">
					<unicon name="youtube" fill="#d3d3d3" />
				</a> -->
				<a href="https://anchor.fm/disregard-that" target="_blank">
					<unicon name="anchor" fill="#e8eae9" />
				</a>
			</div>
		</div>
		<img
			src="../assets/disregard-that-podcast-supercompressed.jpg"
			alt="Disregard that logo."
		/>
		<div class="center-flex">
			<div class="description">
				Disregard That is a podcast is about the philosophy of religion. In an
				attempt to be as charitable as possible, we dive into the views and
				arguments one could take for various aspects of various religions. While
				charity may help, it certainly won't stop us from finding what may have
				been disregarded.
			</div>
		</div>

		<!-- <div class="links"> -->
		<div class="button" v-on:click="navigateToSection('#about')">
			More <b>&#8623;</b>
		</div>
		<!-- </div> -->
	</div>
</template>

<script lang="ts">
	import { Component, Prop, Vue } from "vue-property-decorator";

	@Component
	export default class Header extends Vue {
		@Prop() private msg!: string;

		navigateToSection(section: string) {
			location.href = section;
		}
	}
</script>

<style scoped>
	.header {
		height: 100vh;
		background-image: linear-gradient(to bottom, #1b5471, #55899e);
		background-color: #1b5471;
		color: #e8eae9;
	}

	.nav {
		padding: 30px 50px;
	}

	.title {
		font-size: 1.2em;
		font-weight: 900;
		text-align: left;
	}

	.links {
		width: 20vw;
		padding: 40px 20px;
		margin: auto;
	}

	.button {
		padding: 8px 16px;
		margin: 24px auto;
		border: 1px solid #d3d3d3;
		color: #d3d3d3;
		border-radius: 2px;
		cursor: pointer;
		width: 120px;
		min-width: 60px;
	}

	.s-button {
		font-size: 0.8em;
		padding: 2px 4px;
		margin: 4px 2px;
		border: 1px solid #d3d3d3;
		color: #d3d3d3;
		border-radius: 2px;
		cursor: pointer;
	}

	.button:hover {
		border: 1px solid #ffffff;
		color: #ffffff;
	}

	.s-button:hover {
		border: 1px solid #ffffff;
		color: #ffffff;
	}

	.description {
		width: 85vw;
		max-width: 1000px;
		padding: 20px;
		font-size: 1.2em;
		font-weight: 200;
	}

	img {
		height: 50vh;
		max-width: 90vw;
		padding: 20px;
	}
	svg > path {
		fill: #d3d3d3;
	}
</style>
