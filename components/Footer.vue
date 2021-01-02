<template>
	<Container tag="footer" class="footer py-6">
		<div class="columns">
			<div class="column">
				<h1 id="contact" class="title is-uppercase has-text-weight-light">
					Kon<wbr />takt
				</h1>
				<p>
					A couple of words on how to write you an inquirey or just a message.
					Maybe how soon the visitior should wait for the reply. Also a phone
					number can be mentioned here.
				</p>
				<div class="columns mt-6 has-text-weight-bold">
					<a
						v-for="item in menuItems"
						:key="item.title"
						:href="item.url"
						class="column has-text-white"
						>{{ item.title }}</a
					>
				</div>
			</div>
			<div class="column">
				<b-field>
					<b-input type="email" placeholder="Email" maxlength="30"> </b-input>
				</b-field>
				<b-field>
					<b-input placeholder="Username" maxlength="30"></b-input>
				</b-field>
				<b-field>
					<b-input
						placeholder="Message"
						maxlength="200"
						type="textarea"
					></b-input>
				</b-field>
				<b-field>
					<b-button type="is-primary">Submit</b-button>
				</b-field>
			</div>
		</div>
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
		this.menuItems = (await this.$content('footer-links').fetch()).body
	},
}
</script>

<style lang="sass" scoped>
.title
	font-size: 5rem
	hyphens: auto
footer
	background: rgb(182,174,130)
	background: linear-gradient(135deg, rgba(182,174,130,1) 0%, rgba(152,145,104,1) 100%)
	background-color: transparent
</style>
