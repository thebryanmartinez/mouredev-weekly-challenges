module.exports = {
	env: {
		es2021: true,
		'jest/globals': true,
	},
	extends: ['standard', 'eslint-config-prettier'],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {
		'no-unused-vars': 'warn',
	},
}
