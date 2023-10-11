@ Setup project

```bash
npx react-native@latest init food_client --template react-native-template-typescript
```

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
  arrowParens: "avoid",
  bracketSameLine: true,
  bracketSpacing: true,
  singleQuote: false,
}
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

# Add NativeWind

```bash
yarn add nativewind
```

```bash
yarn add --dev tailwindcss@3.3.2
```

```bash
yarn add postcss@8.4.23
```

- run:

```bash
npx tailwindcss init
```

- add folders that will use tailwind

```ts
content: ["./src/App.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}",  "./components/**/*.{js,jsx,ts,tsx}"],
```

- add to babel.config.js

```js
...,
plugins: ["nativewind/babel"],
```

- for typescript projects, create: app.d.ts, and add:

```ts
/// <reference types="nativewind/types" />
```

# Add @alias

```bash
yarn add --dev babel-plugin-module-resolver
```

```json
//tsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      //We will have to add the same thing in babel.config.js
      "@/*": ["src/*"]
    }
    //other options
  }
  //other configs
}
```

```js
// babel.config.js
module.exports = {
  plugins: [
    // ...others,
    [
      "module-resolver",
      {
        root: ["."],
        alias: {
          // This has to be mirrored in tsconfig.json
          "^@/(.+)": "./src/\\1",
        },
      },
    ],
  ],
}
```

```bash
yarn add --dev babel-plugin-import
```

```js
// .eslintrc.js
module.exports = {
  // ... Otras configuraciones de ESLint ...
  plugins: ["@typescript-eslint", "import"],
  rules: {
    // ... Otras reglas ...
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        // 'newlines-between': 'always',
      },
    ],
  },
}
```

# Add react navigation ( run: pod install )

```bash
yarn add @react-navigation/native react-native-screens react-native-safe-area-context
```

```bash
yarn add @react-navigation/native-stack
```
