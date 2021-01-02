<template>
	<component :is="tag" class="wrapper">
		<div class="body"><slot /></div>
	</component>
</template>

<script>
export default {
	props: {
		tag: {
			type: String,
			default: 'div',
		},
	},
}
</script>

<style lang="sass" scoped>
.wrapper
	// height: 100%
	width: 100%
	display: flex
	justify-content: center
	position: relative
	padding: 0 6%

.body
	max-width: 1200px
	overflow: hidden
</style>
