<template>
	<Container class="shop">
		<div class="columns is-8-desktop padding-header my-7">
			<div class="column is-half">
				<h1 class="title is-hidden-tablet">Shop</h1>
				<ul class="product">
					<li v-for="product in products" :key="product.name" class="my-6">
						<div class="columns">
							<div class="column">
								<img :src="product.img" :alt="product.imgAlt" class="mr-6" />
							</div>

							<div class="column">
								<div class="product_title">
									<h3 class="is-size-4 has-text-weight-bold">
										{{ product.name }}
									</h3>
									<div class="price">{{ product.price }}</div>
								</div>
								<nuxt-content :document="product" />
							</div>
						</div>
					</li>
				</ul>
			</div>
			<div class="column">
				<h1 class="title is-hidden-mobile">Shop</h1>
				<nuxt-content :document="info" />
				<b-button type="is-primary" class="mt-6">Jetzt bestellen</b-button>
			</div>
			<div class="column mb-6">
				<nuxt-content :document="delivery" />
			</div>
		</div>
	</Container>
</template>

<script>
export default {
	async asyncData({ $content, params }) {
		const products = await $content('products').fetch()
		const info = await $content('shop-info').fetch()
		const delivery = await $content('shop-delivery').fetch()
		return { products, info, delivery }
	},
}
</script>

<style lang="sass">
.shop
	background: rgb(20,59,97)
	background: linear-gradient(90deg, rgba(20,59,97,1) 0%, rgba(11,41,75,1) 100%)
	min-height: 100vh
	.title
		font-size: 5rem
		color: var(--color-anakiwa)
.product
	li
		display: flex
		&:first-child
			margin-top: 0!important
	img
		width: 10rem
		height: 10rem
		object-fit: cover
.product_title
	display: flex
	justify-content: space-between
.price
	color: var(--color-anakiwa)
	font-weight: light
</style>
