import deepFreeze from 'deep-freeze';
import * as reducerApp from '../app';
import { NAME_SEARCH, POSITION_SEARCH , AGE_SEARCH } from '../../constants/app';

deepFreeze(reducerApp.initialState);

describe('Reducer app', () => {
    test('initialState', () => {
        const state = reducerApp.reducer();
        expect(state).toEqual(reducerApp.initialState);
    });
    test('AGE_SEARCH', () => {
        const data = { ...reducerApp.initialState, ageSearch: 'data' };
        const action = { type: AGE_SEARCH, data: 'data' };
        const state = reducerApp.reducer(reducerApp.initialState, action);
        expect(state).toEqual(data);
    });
    test('POSITION_SEARCH', () => {
        const data = { ...reducerApp.initialState, positionSearch: 'test' };
        const action = { type: POSITION_SEARCH, data: 'test' };
        const state = reducerApp.reducer(reducerApp.initialState, action);
        expect(state).toEqual(data);
    });
    test('NAME_SEARCH', () => {
        const data = { ...reducerApp.initialState, nameSearch: 'test' };
        const action = { type: NAME_SEARCH, data: 'test' };
        const state = reducerApp.reducer(reducerApp.initialState, action);
        expect(state).toEqual(data);
    });
});
