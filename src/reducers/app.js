import update from 'immutability-helper';
import {NAME_SEARCH,POSITION_SEARCH,AGE_SEARCH} from '../constants/app';

export const initialState = {
    nameSearch: '',
    positionSearch: '',
    ageSearch: '',
};

export const reducer = (state = initialState, { type, ...actions } = {}) => {
    switch (type) {
        case AGE_SEARCH: {
            return update(state, {
                ageSearch: { $set: actions.data },
            });
        }
        case POSITION_SEARCH: {
            return update(state, {
                positionSearch: { $set: actions.data },
            });
        }
        case NAME_SEARCH: {
            return update(state, {
                nameSearch: { $set: actions.data },
            });
        }
        default:
            return state;
    }
};

export default reducer;
