// @flow

declare module 'query-string' {
  declare module.exports: {
    parse(string): { },
    stringify(?{}): string,
  };
}
