import { mapDispatchToProps,mapStateToProps } from '../searchBarContainer';
import {mockState} from "../../../../__test-utils__/mockState";
import {setAgeSearch, setNameSearch, setPositionSearch} from "../../../../actions/app";

describe('Component App: container', () => {
  test('mapDispatchToProps', () => {
    const expectedProps = ['nameSearch', 'ageSearch', 'positionSearch'];
    const props = mapStateToProps(mockState);
    Object.keys(props).forEach((key) => {
      expect(expectedProps).toContain(key);
      expect(typeof props[key]).toBe('string');
    });
  });
  test('mapDispatchToProps', () => {
    const expectedFunctions = ['setNameSearch', 'setAgeSearch', 'setPositionSearch'];
    const dispatch = jest.fn();
    const props = mapDispatchToProps(dispatch);
    Object.keys(props).forEach((func) => {
      expect(expectedFunctions).toContain(func);
      expect(typeof props[func]).toBe('function');
    });
    props.setNameSearch('test');
    expect(dispatch).toHaveBeenCalledWith(setNameSearch('test'));
    dispatch.mockClear();
    props.setAgeSearch('test');
    expect(dispatch).toHaveBeenCalledWith(setAgeSearch('test'));
    dispatch.mockClear();
    props.setPositionSearch('test');
    expect(dispatch).toHaveBeenCalledWith(setPositionSearch('test'));
  });
});
