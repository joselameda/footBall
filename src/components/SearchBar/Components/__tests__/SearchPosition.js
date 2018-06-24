import React from 'react';
import { shallow } from 'enzyme';
import SearchPosition from '../SearchPosition';

describe('Component SearchPosition', () => {
  const mockProps = {
    searchTerm: '',
    onChange: jest.fn(),
  };
  beforeEach(jest.clearAllMocks);
  describe('render', () => {
    test('should render an input', () => {
      const searchNameComponent = shallow(<SearchPosition {...mockProps} />);
      expect(searchNameComponent.find('option').length).toBe(11);
      expect(searchNameComponent.find('select').length).toBe(1);
    });
  });
  describe('onChange', () => {
    test('should call onChange prop if the value doesn\'t have numbers', () => {
      const searchNameComponent = shallow(<SearchPosition {...mockProps} />);
      searchNameComponent.find('select').props().onChange({ target: { value: 'Centre-Forward' } });
      expect(mockProps.onChange).toHaveBeenCalled();
    });
  });
});
