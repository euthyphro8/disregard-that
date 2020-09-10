<template>
	<div class="header">
		<div class="nav space-flex">
			<div class="title">
				<div class="title">DISREGARD</div>
				<div class="title">THAT</div>
			</div>
			<div class="social space-flex">
				<div class="s-button">T</div>
				<div class="s-button">F</div>
				<div class="s-button">A</div>
			</div>
		</div>
		<img
			src="../assets/disregard-that-podcast.jpg"
			alt="Disregard that logo."
		/>
		<div class="center-flex">
			<div class="description">
				Disregard That is a podcast is... Lorem Ipsum is simply dummy text of
				the printing and typesetting industry. Lorem Ipsum has been the
				industry's standard dummy text ever since the 1500s, when an unknown
				printer took a galley of type and scrambled it to make a type specimen
				book.
			</div>
		</div>

		<div class="links">
			<div class="button" v-on:click="navigateToSection('#about')">
				About
			</div>
			<div class="button" v-on:click="navigateToSection('#podcasts')">
				Podcasts
			</div>
		</div>
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
		color: #d3d3d3;
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
		padding: 20px;
		margin: auto;
	}

	.button {
		padding: 8px 32px;
		margin: 8px 16px;
		border: 1px solid #d3d3d3;
		color: #d3d3d3;
		border-radius: 2px;
		cursor: pointer;
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

	.social {
	}

	.description {
		width: 50vw;
		padding: 20px;
		font-size: 1.2em;
		font-weight: 200;
	}

	img {
		height: 50vh;
		padding: 20px;
	}
</style>
