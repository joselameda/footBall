import React from 'react';
import { shallow } from 'enzyme';
import TableHead from "../TableHead/TableHead";

describe('Component TableHead', () => {
  describe('render', () => {
    test('should have one thead element and 6 th', () => {
      const tableHeadComponent = shallow(<TableHead />);
      expect(tableHeadComponent.find('thead').length).toBe(1);
      expect(tableHeadComponent.find('th').length).toBe(6);
    });
  });
});
