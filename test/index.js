// require all files in the current directory ending with .spec.js
// https://github.com/webpack/karma-webpack/issues/23
const testsContext = require.context('./', true, /\.spec\.js$/);
testsContext.keys().forEach(testsContext);
