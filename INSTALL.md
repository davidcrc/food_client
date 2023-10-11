# Add ESLINT

```bash
yarn add -D eslint
```

## Select the better options and standar style

- remove packge-lock, an run yarn install

```bash
npx eslint --init
```

- In .eslintrc.js

```js
{
  extends: [
    "plugin:react/recommended",
    "standard",
    "plugin:react-hooks/recommended",
    "eslint-config-prettier",
    "plugin:react/jsx-runtime"
  ],
}
```

- Create .eslintignore, add: dist

## Add prettier

- In .prettierrc.js

```js
module.exports = {
  singleQuote: false,
  semi: false,
  arrowParens: 'avoid',
  bracketSameLine: true,
  bracketSpacing: true,
  singleQuote: false,
};
```

```bash
yarn add -D eslint-config-prettier
```

- In package.json

```json
"scripts": {
		...
		"lint": "eslint --ext .tsx,.ts src/",
		"format": "prettier --write ./src"
	},
```

- Also, create .prettierignore, add : dist

- In .eslintrc.js

```js
{
  ...
  rules: {},
  settings: {
    react: {
      version: "detect",
    },
  },
}
```

## Add react-hooks

```bash
yarn add eslint-plugin-react-hooks --dev
```

- In .eslintrc.js

```json
{
  "extends": [
    // ...
    "plugin:react-hooks/recommended"
  ]
}
```
