import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import Table from '../../Table/Containers/tableContainer';
import SearchBar from '../../SearchBar/Containers/searchBarContainer';
import Header from '../../Header';

describe('Component App',() => {
  beforeEach(jest.clearAllMocks)
  const mockProps = {
    fetchPlayers: jest.fn(),
  };
  describe('render', () => {
    test('should have 3 components (Header,Table,SearchBar)', () => {
      const appComponent = shallow(<App {...mockProps} />);
      expect(appComponent.find(Header).length).toBe(1);
      expect(appComponent.find(SearchBar).length).toBe(1);
      expect(appComponent.find(Table).length).toBe(1);
    });
  });
  describe('componentDidMount', () => {
    test('should call fetchPlayers in componentDidMount', () => {
      shallow(<App {...mockProps} />);
      expect(mockProps.fetchPlayers).toHaveBeenCalled();
    });
  });
});