<template>
	<Container ref="header" tag="header" class="sm-header">
		<b-navbar class="sm-section-wrapper">
			<template slot="brand">
				<b-navbar-item tag="NuxtLink" to="/">
					<Logo ref="logo" class="logo" />
				</b-navbar-item>
			</template>
			<template slot="start">
				<b-button type="is-text">DE</b-button>
				<b-button type="is-text">EN</b-button>
			</template>
			<template slot="end">
				<b-navbar-item
					v-for="(item, index) of menuItems"
					:key="index"
					tag="NuxtLink"
					:to="item.link"
				>
					{{ item.text }}
				</b-navbar-item>
			</template>
		</b-navbar>
	</Container>
</template>

<script>
export default {
	data() {
		return {
			menuItems: [],
		}
	},
	async fetch() {
		this.menuItems = (await this.$content('header-menu').fetch()).body
	},
	mounted() {
		// Make logo smaller when scrolling down.
		window.onscroll = () => {
			const $logo = this.$refs.logo.$el
			const $header = this.$refs.header.$el
			if (
				document.body.scrollTop > 5 ||
				document.documentElement.scrollTop > 5
			) {
				$header.classList.add('header-scolled')
				$logo.style.height = '2rem'
			} else {
				$header.classList.remove('header-scolled')
				$logo.style.height = '6rem'
			}
		}
	},
}
</script>

<style lang="sass" scoped>
.sm-header.wrapper
	position: fixed
	top: 0
	left: 0
	z-index: 1
::v-deep
	.body
		width: 100%
	.navbar-start
		display: flex
		align-items: center!important
		button
			text-decoration: none
.logo
	height: 6rem
	transition: height 300ms ease
	object-fit: contain
	max-height: none
.navbar
	background-color: transparent
	transition: background-color 0.5s ease, box-shadow 0.5s ease
	font-weight: bold
.header-scolled
	background-color: rgba(0,0,0,.3)
	box-shadow: rgba(0,0,0,.3) 0 0 1em 1em
.navbar-brand
	.navbar-item
		padding: 0
.navbar-item
		&:focus,
		&:hover
			background-color: transparent
</style>
