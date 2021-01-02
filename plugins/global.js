import Vue from 'vue'

const requireComponent = require.context(
	'@/components/global',
	false,
	/[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach((fileName) => {
	const componentConfig = requireComponent(fileName)
	const componentName = fileName.replace(/^\.\/(.*)\.\w+$/, '$1')
	Vue.component(componentName, componentConfig.default || componentConfig)
})
