<template>
	<Container class="music">
		<section class="music-album padding-header pb-6">
			<div
				v-for="(album, index) in albums"
				:key="album.name"
				class="music__album columns"
			>
				<div class="column">
					<h2 v-if="index == 0" class="title has-text-weight-light">
						Mu<wbr />sic
					</h2>
					<nuxt-content :document="album" />
					<b-button v-if="index == 0" type="is-primary" class="my-4"
						>Discover More Music</b-button
					>
				</div>
				<div class="column">
					<img class="music__album-img" :src="album.img" :alt="album.imgAlt" />
				</div>
				<div class="column">
					<div class="album-data">
						<div class="album__title">
							<div class="is-size-1 has-text-weight-bold">{{ album.name }}</div>
						</div>
						<div>
							<ol class="music__song-list">
								<li v-for="song in album.trackList" :key="song[0]" class="mb-2">
									<span>{{ song[0] }}</span>
									<span class="underscore"></span>
									<span class="time">{{ song[1] }}</span>
								</li>
							</ol>
						</div>
					</div>
				</div>
			</div>
		</section>
	</Container>
</template>

<script>
export default {
	async asyncData({ $content, params }) {
		const albums = await $content('/albums').fetch()
		return { albums }
	},
}
</script>

<style lang="sass" scoped>
.music
	background: rgb(100,139,160)
	background: linear-gradient(135deg, rgba(100,139,160,1) 0%, rgba(58,100,120,1) 100%)
	min-height: 100vh
.title
	color: var(--color-mandys-pink)
	font-size: 5rem
	margin-top: -1.1rem

.music__album
	min-height: 60vh
.album__title
	width: 4.5rem
	position: relative
	>div
		transform: rotate(90deg)
		transform-origin: top left
		white-space: nowrap
		position: absolute
		top: 0
		left: 4rem
.album-data
	display: flex
	div:last-child
		flex: 1
@media(max-width: 767px)
	.album-data
		display: block
	.album__title
		>div
			position: relative
			transform: rotate(0deg)
.music__album-img
	width: 100%
	object-fit: contain

::v-deep
	thead
		display: none
	td:first-child
		width: 40px
	td
		border: 0!important
	.talbe
		background-color: transparent
.music__song-list
	li
		display: flex
		justify-content: space-between
		align-items: baseline
	.time
		color: var(--color-mandys-pink)
	.underscore
		flex: 1
		height: 1px
		margin: -.5rem .5rem 0 .5rem
		background: rgb(255,255,255)
		background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(245,207,190,1) 100%)
</style>
