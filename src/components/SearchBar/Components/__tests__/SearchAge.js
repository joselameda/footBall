import React from 'react';
import { shallow } from 'enzyme';
import SearchAge from '../SearchAge';

describe('Component SearchAge', () => {
  const mockProps = {
    searchTerm: '22',
    onChange: jest.fn(),
  };
  beforeEach(jest.clearAllMocks);
  describe('render', () => {
    test('should render an input', () => {
      const searchAgeComponent = shallow(<SearchAge {...mockProps} />);
      expect(searchAgeComponent.find('input').length).toBe(1);
    });
  });
  describe('onChange', () => {
    test('should call onChange prop if the value doesn\'t have letters', () => {
      const searchAgeComponent  = shallow(<SearchAge {...mockProps} />);
      searchAgeComponent.find('input').props().onChange({ target: { value: '18' } });
      expect(mockProps.onChange).toHaveBeenCalled();
    });
  });
});
