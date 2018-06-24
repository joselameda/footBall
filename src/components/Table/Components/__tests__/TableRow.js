import React from 'react';
import { shallow } from 'enzyme';
import TableRow from "../TableRow";
import { mockState } from "../../../../__test-utils__/mockState";

describe('Component TableRow', () => {
  describe('render', () => {
    test('should have one tr and six td', () => {
      const tableRowComponent = shallow(<TableRow player={mockState.player.data[1]} />);
      expect(tableRowComponent.find('tr').length).toBe(1);
      expect(tableRowComponent.find('td').length).toBe(5);
    });
  });
});
