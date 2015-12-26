const jsdom = require('jsdom').jsdom;

// http://rackt.org/redux/docs/recipes/WritingTests.html#fixing-broken-setstate
global.document = jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
global.navigator = global.window.navigator;

// avoid Enzyme webpack errors
// https://github.com/airbnb/enzyme/issues/47#issuecomment-165791879
global.enzyme = require('enzyme');
