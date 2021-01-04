<template>
	<div class="mb-6">
		<section class="mood-pic mb-6">
			<img
				:src="homeText.image"
				:style="homeText.imageStyle"
				class="mood-image"
				alt=""
			/>
			<MoodNav class="mood-nav" down="main-1" />
		</section>
		<Container class="home">
			<nuxt-content :document="homeText" />
		</Container>
	</div>
</template>

<script>
import MoodNav from '@/components/MoodNav'
export default {
	components: { MoodNav },
	async asyncData({ $content, params }) {
		const homeText = await $content('home').fetch()
		return { homeText }
	},
}
</script>

<style lang="sass" scoped>
.mood-pic
	position: relative
	height: 100vh
	width: 100vw
	.title
		position: absolute
		top: 20%
		right: 0
		padding: 1rem
		width: 20rem
@media(max-width: 767px)
	.mood-pic
		.title
			right: none
			left: 0
</style>
