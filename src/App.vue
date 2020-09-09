<template>
	<div id="app">
		<img
			id="logo"
			src="./assets/disregard-that-podcast.jpg"
			alt="Disregard That Logo."
		/>
		<div id="nav">
			<router-link to="/about">About</router-link>
			<router-link to="/podcast">Podcasts</router-link>
		</div>
		<router-view />
	</div>
</template>

<style lang="scss">
	html {
		background-color: #2c3e50;
		margin: 0;
		padding: 0;
		height: 100%;
		width: 100%;
	}
	body {
		margin: 0;
		padding: 0;
		height: 100%;
	}
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		background-color: #3e566e;
		height: 100%;
		text-align: center;
		width: 50%;
		max-width: 1000px;
		min-width: 500px;
		margin: 0 auto;
		padding: 8px;
	}

	#nav {
		padding: 30px;

		a {
			font-weight: bold;
			color: #2c3e50;

			&.router-link-exact-active {
				color: #42b983;
			}
		}
	}

	#logo {
		width: 50%;
		max-width: 500px;
	}
</style>
