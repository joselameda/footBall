import * as actions from '../app';
import { NAME_SEARCH, POSITION_SEARCH , AGE_SEARCH } from '../../constants/app';

describe('Module app: actions', () => {
    test('setNameSearch', () => {
        const data = 'whatever';
        const actionMock = {
            type: NAME_SEARCH,
            data,
        };
        const action = actions.setNameSearch(data);
        expect(action).toEqual(actionMock);
    });
    test('setPositionSearch', () => {
        const data = 'test';
        const actionMock = {
            type: POSITION_SEARCH,
            data,
        };
        const action = actions.setPositionSearch(data);
        expect(action).toEqual(actionMock);
    });
    test('setAgeSearch', () => {
        const data = 'test';
        const actionMock = {
            type: AGE_SEARCH,
            data,
        };
        const action = actions.setAgeSearch(data);
        expect(action).toEqual(actionMock);
    });
});
