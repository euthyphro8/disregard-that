<template>
	<div class="podcasts" id="podcasts">
		<div class="title">Podcasts</div>
		<div v-for="link in links" :key="link">
			<div class="container">
				<iframe
					class="responsive-iframe"
					v-bind:src="getEmbeddedLink(link)"
					frameborder="0"
					scrolling="no"
				></iframe>
			</div>
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
	.podcasts {
		/* background-image: linear-gradient(to bottom, #99aab4, #e8eae9); */
		/* background-color: #1b5471; */
		background-color: #1e1f25;
		color: #e8eae9;
		/* padding-top: 100px; */
	}
	.title {
		padding: 50px;
		font-size: 2em;
		font-weight: 900;
	}
	.container {
		position: relative;
		overflow: hidden;
		width: 80vw;
		height: 150px;
		padding: 10px;
		margin: auto;
		max-width: 1000px;
	}
	@media (max-width: 935px) {
		.container {
			height: 100px;
		}
	}

	.responsive-iframe {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		width: 100%;
		height: 100%;
	}
</style>