<template>
	<div>
		<Header />
		<nuxt />
		<Footer />
	</div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
	components: {
		Header,
		Footer,
	},
	data() {
		return {
			items: [
				{
					title: 'Home',
					icon: 'home',
					to: { name: 'index' },
				},
				{
					title: 'Inspire',
					icon: 'lightbulb',
					to: { name: 'inspire' },
				},
			],
		}
	},
}
</script>
<style lang="sass">
body.has-navbar-fixed-top
	// padding-top: 3.25rem
	padding-top: 0
</style>
