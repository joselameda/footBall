import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header';

describe('Component HeaderBar', () => {
  describe('render', () => {
    test('should have a nav element', () => {
      const componentHeader = shallow(<Header />);
      expect(componentHeader.find('nav').length).toBe(1);
    });
  });
});
