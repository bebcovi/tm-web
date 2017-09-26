// @flow

declare module 'query-string' {
  declare module.exports: {
    stringify(?{}): string,
    parse(string): {},
  };
}
