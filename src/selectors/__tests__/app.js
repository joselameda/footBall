import { ageSearchSelector,nameSearchSelector,positionSearchSelector } from '../app';
import { mockState } from "../../__test-utils__/mockState";

describe('Selector app :', () => {
  test('ageSearch', () => {
    const data = ageSearchSelector(mockState);
    expect(data).toEqual(mockState.app.ageSearch);
  });
  test('nameSearch', () => {
    const data = nameSearchSelector(mockState);
    expect(data).toEqual(mockState.app.nameSearch);
  });
  test('positionSearch', () => {
    const data = positionSearchSelector(mockState);
    expect(data).toEqual(mockState.app.positionSearch);
  });
});
