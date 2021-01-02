<template>
	<div>
		<Container class="live">
			<div class="columns padding-header">
				<img
					src="/img/Sörenrotorginaljpg_result.jpg"
					alt=""
					class="deskop-image is-hidden-touch"
				/>
				<div class="column">
					<h1 class="title">Live</h1>
					<p>
						Dolore ut laboris ad esse velit eiusmod ea dolor voluptate cupidatat
						nulla amet nisi laboris adipisicing irure magna magna cupidatat sit
						cupidatat id veniam cupidatat in aliqua nulla.
					</p>
					<b-button type="is-primary">Alle Konzerte ansehen</b-button>
				</div>
				<div class="concert column is-half">
					<div v-for="i in [1, 2, 3]" :key="i" class="my-6">
						<div class="concert_title">
							<h3 class="is-size-4 has-text-weight-bold">Velit culpa.</h3>
							<div class="concert_datetime has-text-primary">
								12. Dec, 18:00
							</div>
						</div>
						<p>
							Eiusmod fugiat labore est tempor minim aute cillum commodo duis
							labore reprehenderit tempor reprehenderit exercitation eiusmod
							laboris occaecat proident non.
						</p>
					</div>
				</div>
				<div class="column"></div>
			</div>
		</Container>
		<img
			src="/img/Sörenrotorginaljpg_result.jpg"
			alt=""
			class="mood-image is-hidden-desktop"
		/>
	</div>
</template>
<style lang="sass">
.live
	background: rgb(157,41,62)
	background: linear-gradient(135deg, rgba(157,41,62,1) 0%, rgba(109,28,42,1) 100%)
	min-height: 100vh
	.title
		font-size: 5rem
	.deskop-image
		position: absolute
		top: 0
		right: 0
		width: calc(27vw)
		object-fit: cover
		height: 100vh
		transform: scaleX(-1)
.concert
	>div:first-child
		margin-top: 0!important
.concert_title
	display: flex
	justify-content: space-between
</style>
