module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'airbnb',
		'airbnb/hooks',
		'airbnb-typescript',
		'prettier',
	],
	ignorePatterns: [
		'dist',
		'.eslintrc.cjs',
		'node-modules',
		'tsconfig.json',
		'tsconfig.node.json',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.json',
	},
	plugins: ['prettier'],
	rules: {
		'no-unused-vars': 'off',
		'prettier/prettier': 'error',
	},
};
