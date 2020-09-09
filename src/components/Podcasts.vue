<template>
	<div>
		<div class="section">Podcasts</div>
		<div v-for="link in links" :key="link">
			<iframe
				v-bind:src="getEmbeddedLink(link)"
				height="200px"
				width="800px"
				frameborder="0"
				scrolling="no"
			></iframe>
			<!-- <p>
				{{ link }}
			</p> -->
		</div>
	</div>
</template>

<script lang="ts">
	import { Component, Prop, Vue } from "vue-property-decorator";

	@Component
	export default class Podcasts extends Vue {
		@Prop() private msg!: string;
		private links: Array<string> = [];

		created() {
			const podcastLinks: Array<string> = [];
			const url = "https://anchor.fm/s/1bd485bc/podcast/rss";
			fetch(url)
				.then(response => response.text())
				.then(str => new window.DOMParser().parseFromString(str, "text/xml"))
				.then(data => {
					const items = data.querySelectorAll("item");
					items.forEach(el => {
						const link = el.querySelector("link");
						if (link) {
							const sections = link.innerHTML.split("/");
							podcastLinks.push(sections[5]);
						}
					});
				});
			this.links = podcastLinks;
		}

		getEmbeddedLink(link: string) {
			return `https://anchor.fm/disregard-that/embed/episodes/${link}/a-a34r1sj`;
		}
	}
</script>

<style scoped>
	.section {
	}
</style>
