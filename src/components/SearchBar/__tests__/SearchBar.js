import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from '../SearchBar';
import SearchName from '../Components/SearchName';
import SearchPosition from '../Components/SearchPosition';
import SearchAge from '../Components/SearchAge';

describe('Component SearchBar', () => {
  describe('render', () => {
    beforeEach(jest.clearAllMocks);
    const mockProps = {nameSearch: 'Romelu', positionSearch: 'entre-Forward', ageSearch: '27', setNameSearch: jest.fn(), setPositionSearch: jest.fn(), setAgeSearch: jest.fn(),
    };
    test('should have 3 components (SearchName,SearchPosition,SearchAge) ', () => {
      const searchBarComponent = shallow(<SearchBar {...mockProps} />);
      expect(searchBarComponent.find(SearchName).length).toBe(1);
      expect(searchBarComponent.find(SearchPosition).length).toBe(1);
      expect(searchBarComponent.find(SearchAge).length).toBe(1);
    });
  });
});
