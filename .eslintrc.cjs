module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'plugin:@typescript-eslint/recommended',
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
	parserOptions: {
		project: './tsconfig.json',
		tsconfigRootDir: __dirname,
		sourceType: 'module',
	},
	plugins: ['prettier'],
	rules: {
		'no-unused-vars': 'off',
		'prettier/prettier': 'error',
		'import/no-extraneous-dependencies': 0,
		'react/react-in-jsx-scope': 'off',
		'react/function-component-definition': [
			'error',
			{
				namedComponents: 'arrow-function',
				unnamedComponents: 'arrow-function',
			},
		],
		'import/prefer-default-export': 'off',
	},
};
