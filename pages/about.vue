<template>
	<div class="about">
		<img src="img/Wiese.jpg" alt="" />
		<section id="main-1" class="about-text padding-header mb-6">
			<h1 class="title mb-4">About</h1>
			<p class="mb-4">
				Adipisicing duis cillum eiusmod non laboris dolore proident labore dolor
				fugiat aliquip ad deserunt magna est reprehenderit elit aliquip sint
				dolore commodo dolore dolore ad magna culpa in ut tempor ut tempor
				tempor aliquip proident sed in officia eu irure qui fugiat qui
				exercitation veniam elit reprehenderit mollit commodo pariatur do id
				eiusmod in consequat laboris in incididunt sint excepteur nulla sit ut
				deserunt incididunt do officia velit anim est fugiat duis ea mollit id
				in in consequat est sit commodo eiusmod. <br />
				<br />
				Lorem ipsum sed laborum incididunt reprehenderit tempor exercitation
				irure minim pariatur laborum dolore exercitation ut magna adipisicing
				nisi non dolore in non in mollit eu ut sint in commodo labore occaecat
				nostrud.
			</p>
			<b-button type="is-primary">Mehr lesen</b-button>
		</section>
	</div>
</template>
<style lang="sass" scoped>
.about
	background: rgb(60,66,45)
	background: linear-gradient(135deg, rgba(60,66,45,1) 0%, rgba(25,29,18,1) 100%)
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
@media(max-width: 767px)
	.about
		flex-direction: column
		flex-direction: column-reverse
	.about-text
		margin: 0 6%
	img
		width: 100%
</style>
