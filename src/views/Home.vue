<template>
	<div class="home">
		<Header />
		<About />
		<Podcasts />
		<div class="cw">© 2020 Josh Hess & Rama Hemphill</div>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from "vue-property-decorator";
	import Header from "@/components/Header.vue";
	import About from "@/components/About.vue";
	import Podcasts from "@/components/Podcasts.vue";

	@Component({
		components: {
			Header,
			About,
			Podcasts
		}
	})
	export default class Home extends Vue {}
</script>

<style>
	.home {
		background-color: #1e1f25;
		color: #d3d3d3;
	}
	.cw {
		padding-top: 32px;
		padding-bottom: 32px;
	}
</style>
