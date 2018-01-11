# modify-assets-webpack-plugin

[![npm](https://img.shields.io/npm/v/modify-assets-webpack-plugin.svg?maxAge=2592000)](https://www.npmjs.com/package/modify-assets-webpack-plugin)

Plugin to modify build sources prior to bundling.

## Install

`yarn add -D modify-assets-webpack-plugin`

## Usage Example

```js
const ModifyAssets = require('modify-assets-webpack-plugin');

module.exports = {
  // ... webpack config ...
  plugins: [
    new ModifyAssets({
      test: /src\/.*\.js$/, // regex match on file path(s)
      dirname: process.cwd(), // some base path of matched files.
                              // affects what is passed into test regex.
      callback: (filepath, source) => {
        return source.replace(/cat/g, 'dog');
      }
    })
  ]
}
```
