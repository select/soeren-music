<template>
	<Container class="music">
		<section class="music-album padding-header pb-6">
			<div class="columns">
				<div class="column">
					<h2 class="title">Mu<wbr />sic</h2>
					<p>
						Lorem ipsum nostrud voluptate ea id ad exercitation esse voluptate
						non consequat ut incididunt culpa sint qui nulla culpa magna nostrud
						labore dolor irure fugiat cillum id quis et consectetur nisi labore
						sint sit est quis.
					</p>
					<p>
						Nulla ut nisi fugiat aute elit eiusmod eu dolor id sint culpa minim
						reprehenderit ex labore commodo et in id tempor enim nostrud veniam
						ad ut do. Lorem ipsum ea proident mollit sunt nisi minim officia ea
						proident duis nisi mollit aliqua deserunt in ea do est fugiat sed
						duis tempor elit et velit.
					</p>
					<b-button type="is-primary" class="my-4"
						>Discover More Music</b-button
					>
				</div>
				<div class="column has-text-centered">
					<img
						class="music__album-img"
						:src="album1meta.albumImg"
						:alt="album1meta.albumImgAlt"
					/>
				</div>
				<div class="column">
					<div class="album-data">
						<div class="album__title">
							<div class="is-size-1 has-text-weight-bold">Serving Life</div>
						</div>
						<div>
							<ol class="music__song-list">
								<li v-for="song in album1" :key="song.songName" class="mb-2">
									<span>{{ song.songName }}</span>
									<span class="underscore"></span>
									<span class="time">{{ song.length }}</span>
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
		const album1 = (await $content('albums/album-1').fetch()).body
		const album1meta = await $content('albums/album-1-meta').fetch()
		return { album1, album1meta }
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
	position: relative
.album__title
	width: 3rem
	position: relative
	>div
		transform: rotate(90deg)
		transform-origin: top left
		white-space: nowrap
		position: absolute
		top: 0
		left: 3rem
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
	.music__album
		padding-left: 0
.music__album-img
	width: 100%
	height: 100%
	object-fit: cover

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
