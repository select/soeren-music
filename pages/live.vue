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
					<nuxt-content :document="content" />
					<b-button type="is-primary">Alle Konzerte ansehen</b-button>
				</div>
				<div class="concert column is-half">
					<div v-for="concert in concerts" :key="concert.name" class="my-6">
						<div class="concert_title">
							<h3 class="is-size-4 has-text-weight-bold">
								{{ concert.place }}
							</h3>
							<div class="concert_datetime has-text-primary">
								{{ concert.dateHuman }}
							</div>
						</div>
						<p>
							{{ concert.name }}
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

<script>
import dayjs from 'dayjs'
import 'dayjs/locale/de'
dayjs.locale('de')
export default {
	async asyncData({ $content, params }) {
		const content = await $content('live').fetch()
		const _concerts = (await $content('concerts').fetch()).body
		const concerts = _concerts.map((item) =>
			Object.assign(item, {
				dateHuman: dayjs(item.date).format('DD. MMMM YYYY'),
			})
		)
		return { concerts, content }
	},
}
</script>

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
	white-space: nowrap
</style>
