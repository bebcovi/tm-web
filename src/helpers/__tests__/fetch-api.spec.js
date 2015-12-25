// http://rjzaworski.com/2015/06/testing-api-requests-from-window-fetch
import 'whatwg-fetch';
import expect, { spyOn } from 'expect';
import { jsonOk, jsonError } from 'helpers/response';
import fetch from '../fetch-api';

describe('fetch API', () => {
  afterEach(() => {
    window.fetch.restore();
  });

  it('calls window.fetch', () => {
    const spy = spyOn(window, 'fetch').andReturn(jsonOk());
    fetch('/foobar');
    expect(spy).toHaveBeenCalled();
  });

  it('parses JSON', () => {
    spyOn(window, 'fetch').andReturn(jsonOk({ foo: 'bar' }));
    fetch('/foobar').then((res) => {
      expect(res).toEqual({ foo: 'bar' });
    });
  });

  describe('rejects on status code', () => {
    const codes = [300, 400, 500];

    codes.forEach((code) => {
      it(code, () => {
        spyOn(window, 'fetch').andReturn(jsonError(code, { foo: 'bar' }));
        fetch('/foobar').catch((res) => {
          expect(res).toEqual({ foo: 'bar' });
        });
      });
    });
  });

  it('uses the correct URL', () => {
    const url = '/foobar';
    const spy = spyOn(window, 'fetch').andReturn(jsonOk());
    fetch(url);
    expect(spy).toHaveBeenCalledWith(`http://api.toastmasters.hr${url}`, {
      headers: {
        'X-Api-Key': __API_KEY__
      }
    });
  });
});
