import * as actions from '../player';
import { SET_PLAYERS } from '../../constants/player';

describe('Module app: actions', () => {
    test('setPlayers', () => {
        const data = 'whatever';
        const actionMock = {
            type: SET_PLAYERS,
            data,
        };
        const action = actions.setPlayers(data);
        expect(action).toEqual(actionMock);
    });
});
