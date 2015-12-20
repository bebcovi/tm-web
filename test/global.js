import { jsdom } from 'jsdom';

// http://rackt.org/redux/docs/recipes/WritingTests.html#fixing-broken-setstate
global.document = jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
global.navigator = global.window.navigator;

// simulate production environment
global.__DEV__ = false;
