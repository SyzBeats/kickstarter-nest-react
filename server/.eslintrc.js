module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: 'tsconfig.json',
		tsconfigRootDir: __dirname,
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint/eslint-plugin', 'import'],
	extends: [
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
	],
	root: true,
	env: {
		node: true,
		jest: true,
	},
	ignorePatterns: ['.eslintrc.js'],
	rules: {
		'@typescript-eslint/interface-name-prefix': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'object-curly-spacing': ['error', 'always'],
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': 'error',
		// Enforce tabs with a width of 4
		indent: [
			'error',
			'tab',
			{
				SwitchCase: 1,
				// Decorator indentation fix
				ignoredNodes: [
					'FunctionExpression > .params[decorators.length > 0]',
					'FunctionExpression > .params > :matches(Decorator, :not(:first-child))',
					'ClassBody.body > PropertyDefinition[decorators.length > 0] > .key',
				],
			},
		],
		'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
		// Prettier integration to enforce tab width of 4
		'prettier/prettier': [
			'error',
			{
				useTabs: true,
				tabWidth: 4,
			},
		],
		"import/order": [
			"error",
			{
				"groups": [
					[
						"builtin",
						"external",
						"internal"
					],
					[
						"parent",
						"sibling",
						"index"
					]
				],
				"newlines-between": "always"
			}
		],
	},
};
