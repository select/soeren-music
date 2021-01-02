#!/usr/bin/env node
const { execSync } = require('child_process')
const inquirer = require('inquirer')
inquirer.registerPrompt('autocomplete', require('inquirer-autocomplete-prompt'))
const Fuse = require('fuse.js')
const packageJson = require('../package.json')

async function run() {
	const actions = Object.entries(packageJson.scripts)
		.filter(([name]) => name !== 'start')
		.map(([name, value]) => ({
			name,
			callback: () => {
				execSync(value, { stdio: [0, 1, 2] })
			},
		}))

	const fuse = new Fuse(actions, { keys: ['name'] })
	const { startAction } = await inquirer.prompt([
		{
			type: 'autocomplete',
			name: 'startAction',
			message: 'What do you want to do?',
			default: 'dev',
			source: (answersSoFar, input) => {
				if (!input) return actions.map(({ name }) => name)
				return fuse.search(input).map(({ item }) => item.name)
			},
		},
	])

	await actions.find(({ name }) => name === startAction).callback()
}

run().then(() => console.log('The End.'))
