<template>
	<div class="about">
		<div class="about-intro">
			<img :src="intro.img" alt="" />
			<section id="main-1" class="about-text padding-header mb-6">
				<h1 class="title mb-4">About</h1>
				<nuxt-content :document="intro" />
				<b-button type="is-primary" tag="a" href="#continue"
					>Mehr lesen</b-button
				>
			</section>
		</div>
		<Container>
			<a id="continue"></a>
			<div class="about-continued my-6">
				<nuxt-content :document="continued" />
			</div>
		</Container>
	</div>
</template>
<script>
export default {
	async asyncData({ $content, params }) {
		const intro = await $content('about-intro').fetch()
		const continued = await $content('about-continued').fetch()
		return { intro, continued }
	},
}
</script>
<style lang="sass" scoped>
.about
	background: rgb(60,66,45)
	background: linear-gradient(135deg, rgba(60,66,45,1) 0%, rgba(25,29,18,1) 100%)
.about-intro
	min-height: 100vh
	display: flex
	.title
		color: var(--color-primary)
		font-size: 5rem
	img
		width: 50%
		height: 100vh
		object-fit: cover
		object-position: 30%
.about-text
	margin-right: 6%
	margin-left: 1rem
	max-width: 600px
	min-height: 80vh
.about-continued
	column-count: 2
	column-gap: 4rem
@media(max-width: 767px)
	.about-intro
		flex-direction: column
		flex-direction: column-reverse
		img
			width: 100%
	.about-text
		margin: 0 6%
	.about-continued
		column-count: 1
</style>
