<template>
	<a class="mood-nav" :href="'#' + down">
		<b-button
			class="is-size-1"
			rounded
			outlined
			type="is-text"
			icon-right="arrow-down"
		/>
	</a>
</template>
<script>
export default {
	props: {
		down: {
			type: String,
			required: true,
		},
	},
}
</script>
<style lang="sass" scoped>
.mood-nav
	position: absolute
	bottom: 0
	right: 0
.button
	color: var(--color-primary)
	&:hover
		background-color: transparent
</style>
