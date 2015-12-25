// https://github.com/webpack/karma-webpack/issues/23
const testsContext = require.context('../src', true, /\.spec\.js$/);
testsContext.keys().forEach(testsContext);
