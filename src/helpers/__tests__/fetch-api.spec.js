import nock from 'nock';
import expect from 'expect';
import fetch from '../fetch-api';

describe('fetch API', () => {
  it('resolves on status code 200', () => {
    nock(__API_URL__)
      .get('/foobar')
      .reply(200, { foo: 'bar' });

    return fetch('/foobar')
      .then((res) => res.json())
      .then((res) => {
        expect(res).toEqual({ foo: 'bar' });
      });
  });

  describe('rejects on status code', () => {
    const codes = [300, 400, 500];

    codes.forEach((code) => {
      it(code, () => {
        nock(__API_URL__)
          .get('/foobar')
          .reply(code, { foo: 'bar' });

        return fetch('/foobar')
          .catch((res) => res.json())
          .then((res) => {
            expect(res).toEqual({ foo: 'bar' });
          });
      });
    });
  });
});
