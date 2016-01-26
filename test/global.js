// http://rackt.org/redux/docs/recipes/WritingTests.html#fixing-broken-setstate
require('jsdom-global')();

// avoid Enzyme webpack errors
// https://github.com/airbnb/enzyme/issues/47#issuecomment-165791879
global.enzyme = require('enzyme');
