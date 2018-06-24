import update from 'immutability-helper';
import {SET_PLAYERS} from '../constants/player';

export const initialState = {
    data: {},
};

export const reducer = (state = initialState, { type, ...action } = {}) => {
    switch (type) {
        case SET_PLAYERS: {
            return update(state, {
                data: { $set: action.data },
            });
        }
        default:
            return state;
    }
};

export default reducer;