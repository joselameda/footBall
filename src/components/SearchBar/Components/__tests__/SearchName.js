import React from 'react';
import { shallow } from 'enzyme';
import SearchName from '../SearchName';

describe('Component SearchName', () => {
  const mockProps = {
    searchTerm: 'Romelu',
    onChange: jest.fn(),
  };
  beforeEach(jest.clearAllMocks);
  describe('render', () => {
    test('should render an input', () => {
      const searchNameComponent = shallow(<SearchName {...mockProps} />);
      expect(searchNameComponent.find('input').length).toBe(1);
    });
  });
  describe('onChange', () => {
    test('should call onChange prop if the value doesn\'t have numbers', () => {
      const searchNameComponent = shallow(<SearchName {...mockProps} />);
      searchNameComponent.find('input').props().onChange({ target: { value: 'Rom' } });
      expect(mockProps.onChange).toHaveBeenCalled();
    });
  });
});
