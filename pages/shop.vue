<template>
	<Container class="shop">
		<div class="columns is-8-desktop padding-header my-7">
			<div class="column is-half">
				<h1 class="title is-hidden-tablet">Shop</h1>
				<ul class="product">
					<li v-for="i in [1, 2, 3]" :key="i" class="my-6">
						<img src="/img/TitelDigiPack.jpg" alt="" class="mr-6" />
						<div>
							<div class="product_title">
								<h3 class="is-size-4 has-text-weight-bold">Velit culpa.</h3>
								<div class="price">32€</div>
							</div>
							<p>
								Eiusmod fugiat labore est tempor minim aute cillum commodo duis
								labore reprehenderit tempor reprehenderit exercitation eiusmod
								laboris occaecat proident non.
							</p>
						</div>
					</li>
				</ul>
			</div>
			<div class="column">
				<h1 class="title is-hidden-mobile">Shop</h1>
				<p>
					Lorem ipsum deserunt sint amet cillum ut incididunt magna magna eu
					nostrud in occaecat ex qui proident nulla sed incididunt elit dolor
					duis nostrud.
				</p>
				<b-button type="is-primary" class="mt-6">Jetzt bestellen</b-button>
			</div>
			<div class="column">
				<p>
					DHL Sed nisi dolor ex ut aute culpa amet incididunt incididunt commodo
					eu mollit ad dolore laborum occaecat consectetur aliqua sint in
					officia irure ut magna dolor deserunt culpa.
				</p>
			</div>
		</div>
	</Container>
</template>
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
