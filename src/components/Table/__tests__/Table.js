import React from 'react';
import { shallow } from 'enzyme';
import TableHead from "../Components/TableHead";
import TableRow from "../Components/TableRow";
import Table from "../Table";
import { mockState } from "../../../__test-utils__/mockState";

describe('Component Table', () => {
  describe('render', () => {
    test('should have 2 components (TableHead,TableRow)', () => {
      const  players  = mockState.player.data;
      const tableComponent = shallow(<Table players={players} />);
      expect(tableComponent.find(TableHead).length).toBe(1);
      expect(tableComponent.find(TableRow).length).toBe(players.length);
    });
  });
});
