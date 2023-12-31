# Setup project

```bash
npx react-native@latest init food_client --template react-native-template-typescript
```

# Add ESLINT

```bash
yarn add eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

- Add to package.json

```json
{
  "lint": "eslint --ext .tsx,.ts src/",
  "format": "eslint --ext .tsx,.ts src/ --fix"
}
```

- add to eslintrc.js

```js
{
  "parser": "@typescript-eslint/parser",
  "extends": ["plugin:@typescript-eslint/recommended"],
  "parserOptions": {
    "ecmaVersion": 2021,
    "sourceType": "module"
  },
  // 0 = off, 1 = warn, 2 = error
  "rules": {
    "@typescript-eslint/explicit-member-accessibility": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/no-parameter-properties": 0,
    "@typescript-eslint/interface-name-prefix": 0,
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/ban-types": 0,
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/no-empty-function": 1
  }
}
```

# Prettier

```bash
yarn add -D prettier eslint-config-prettier eslint-plugin-prettier
```

- add to .prettierrc.js

```js
module.exports = {
  semi: true,
  trailingComma: "all",
  singleQuote: true,
  printWidth: 120,
  tabWidth: 2,
}
```

- Update .eslintrc.js with:

```json
"extends": ["prettier", "plugin:@typescript-eslint/recommended", "plugin:prettier/recommended"],
```

# Add Exhaustive Deps

```bash
yarn add eslint-plugin-react-hooks --dev
```

- add to eslintrc.js

```js
{
  "plugins": [
    // ...
    "react-hooks"
  ],
  "rules": {
    // ...
    "react-hooks/rules-of-hooks": "error", // For checking rules of hooks
    "react-hooks/exhaustive-deps": "warn" // For checking hook dependencies
  }
}
```

# Add NativeWind

- https://www.nativewind.dev/quick-starts/create-react-native-app

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
content: ["./src/App.{js,jsx,ts,tsx}", "./src/screens/**/*.{js,jsx,ts,tsx}", "./src/components/**/*.{js,jsx,ts,tsx}"],
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

- https://reactnavigation.org/docs/hello-react-navigation/

```bash
yarn add @react-navigation/native react-native-screens react-native-safe-area-context
```

```bash
yarn add @react-navigation/native-stack
```

# Add Organizing Imports

```bash
yarn add -D eslint-plugin-import
```

# Add React Native Feather Icons

- https://www.npmjs.com/package/react-native-feather

```bash
yarn add react-native-feather react-native-svg
```

# Add React Native Maps

- FIRST: https://github.com/react-native-maps/react-native-maps/blob/master/docs/installation.md

```bash
yarn add react-native-maps
```

- in android/app/build.gradle, add:

```gradle
apply plugin: 'com.google.android.libraries.mapsplatform.secrets-gradle-plugin'
```

- in android/app/src/main/AndroidManifest.xml, add:

```xml
<meta-data
  android:name="com.google.android.geo.API_KEY"
  android:value="${MAPS_API_KEY}"/>
```

- in android/build.gradle,

```json
dependencies{
  ///...
  classpath "com.google.android.libraries.mapsplatform.secrets-gradle-plugin:secrets-gradle-plugin:2.0.1"
}
```

- add to ios/food_client/Info.plist

```plist
<key>MAPS_API_KEY</key>
<string>$(MAPS_API_KEY)</string>
```

-

- Add your API key(s)

  - Android
    - Open `android/local.properties` (or create the file if it doesn't already exist)
    - Add the following line: `MAPS_API_KEY=your_api_key_here`
  - iOS
    - Open Xcode with Project and create a New -> Config file called Config
    - Go to [Project] -> Info -> Configurations : select to debug and relese his Config file
    - Add the following line: `MAPS_API_KEY=your_api_key_here`, in Config.xcconfig

- Add to .gitignore: ios/Config.xcconfig

- ALSO: Open project

# Add Redux toolkit

- https://redux-toolkit.js.org/tutorials/quick-start

```bash
yarn add @reduxjs/toolkit react-redux
```

# Add Sanity client

```bash
yarn add @sanity/client
```

```bash
yarn add -D @sanity/image-url
```
