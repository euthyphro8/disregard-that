<template>
	<div class="about" id="about">
		<div class="title">About</div>
		<div class="center-flex small-container">
			<div class="content">
				<img class="avatar" src="../assets/rama.jpg" alt="Rama" />
				<div class="blurb">
					Rama Hemphill is a human person.
					<hr width="50%" noshade />
					<a
						href="https://www.youtube.com/channel/UCD3K1gUG75OhfDOAZnaHrFA/featured"
						target="_blank"
					>
						<unicon name="youtube" fill="#e8eae9" />
					</a>
					<a href="https://www.facebook.com/Ramkalomusic" target="_blank">
						<unicon name="facebook-f" fill="#e8eae9" />
					</a>
					<a
						href="https://open.spotify.com/artist/5gv7MTtzbjY4rHC52N2o5t?si=-z6Ip-jCQ7G860mJsiIa6A"
						target="_blank"
					>
						<unicon name="spotify" fill="#e8eae9" />
					</a>
					<a href="https://ramkalo.bandcamp.com/releases" target="_blank">
						<unicon name="bandcamp" fill="#e8eae9" />
					</a>
				</div>
			</div>
			<div class="content">
				<img class="avatar" src="../assets/josh.jpg" alt="Josh" />
				<div class="blurb">
					Josh Hess is a software engineer, mathematician, and passionate
					dissentient. While board games, snowboarding, and hobbyist electronics
					can be fun - nothing quite beats being the devils advocate.
					<hr width="50%" noshade />
					<a href="http://www.joshhess.info/" target="_blank">
						<unicon name="globe" fill="#e8eae9" />
					</a>
					<a href="https://twitter.com/euthyphro666" target="_blank">
						<unicon name="twitter" fill="#e8eae9" />
					</a>
					<a href="https://github.com/euthyphro666" target="_blank">
						<unicon name="github" fill="#e8eae9" />
					</a>
					<a href="https://www.linkedin.com/in/joshhess8/" target="_blank">
						<unicon name="linkedin" fill="#e8eae9" />
					</a>
				</div>
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
		background-color: #e8eae9;
		color: #1e1f25;
		padding: 50px;
		/* padding-top: 80px; */
	}
	.title {
		padding-bottom: 50px;
		font-size: 2em;
		font-weight: 900;
	}
	.content {
		width: 50vh;
	}
	.avatar {
		width: 20vh;
		border: 5px solid #1e1f25;
		border-radius: 500px;
		margin: 8px;
	}
	.blurb {
		border: 3px solid #1e1f25;
		border-radius: 60px;
		background-color: #1e1f25;
		margin: 8px;
		padding: 20px;
		padding-top: 40px;
		color: #e8eae9;
	}

	@media (max-width: 650px) {
		.small-container {
			flex-direction: column;
		}
		.content {
			width: 100%;
		}
	}
</style>
