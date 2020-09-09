<template>
	<div class="home">
		<Header />
		<Podcasts />
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from "vue-property-decorator";
	import Header from "@/components/Header.vue";
	import Podcasts from "@/components/Podcasts.vue";

	@Component({
		components: {
			Header,
			Podcasts
		}
	})
	export default class Home extends Vue {}
</script>

<style>
	.home {
	}
</style>
