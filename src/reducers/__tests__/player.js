import deepFreeze from 'deep-freeze';
import * as reducerPlayer from '../player';
import { SET_PLAYERS } from '../../constants/player';

deepFreeze(reducerPlayer.initialState);

describe('Reducer player', () => {
    test('initialState', () => {
        const state = reducerPlayer.reducer();
        expect(state).toEqual(reducerPlayer.initialState);
    });
    test('SET_PLAYERS', () => {
        const data = { ...reducerPlayer.initialState, data: 'data' };
        const action = { type: SET_PLAYERS, data: 'data' };
        const state = reducerPlayer.reducer(reducerPlayer.initialState, action);
        expect(state).toEqual(data);
    });
});
