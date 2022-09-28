import React from 'react';
import {
  render,
  getAllByTextContext,
  getByTextContext,
  queryAllByTextContext,
  queryByTextContext,
} from 'tests/test-utils';

describe('testUtilsExtension', () => {
  const textToFind = 'Test Text';

  describe('getByTextContext', () => {
    it('finds the text element regardless of markup', () => {
      render(
        <div>
          Test <b>Text</b>
        </div>,
      );

      const foundText = getByTextContext(textToFind);

      expect(foundText).toBeInTheDocument();
      expect(foundText.textContent).toEqual(textToFind);
    });
  });

  describe('getAllByTextContext', () => {
    it('finds all text elements regardless of markup', () => {
      render(
        <>
          <div>
            Test <b>Text</b>
          </div>
          <div>
            Test <b>Text</b>
          </div>
          <div>
            Not <b>Text</b>
          </div>
        </>,
      );

      const foundText = getAllByTextContext(textToFind);

      expect(foundText.length).toEqual(2);
      expect(foundText[0].textContent).toEqual(textToFind);
      expect(foundText[1].textContent).toEqual(textToFind);
    });
  });

  describe('queryByTextContext', () => {
    it('queries the text element regardless of markup', () => {
      render(
        <div>
          Test <b>Text</b>
        </div>,
      );

      const foundText = queryByTextContext(textToFind);

      expect(foundText).toBeInTheDocument();
      expect(foundText?.textContent).toEqual(textToFind);
    });
  });

  describe('queryAllByTextContext', () => {
    it('queries all text elements regardless of markup', () => {
      render(
        <>
          <div>
            Test <b>Text</b>
          </div>
          <div>
            Test <b>Text</b>
          </div>
          <div>
            Not <b>Text</b>
          </div>
        </>,
      );

      const foundText = queryAllByTextContext(textToFind);

      expect(foundText.length).toEqual(2);
      expect(foundText[0].textContent).toEqual(textToFind);
      expect(foundText[1].textContent).toEqual(textToFind);
    });
  });
});
