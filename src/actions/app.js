import { NAME_SEARCH,AGE_SEARCH,POSITION_SEARCH } from '../constants/app';

export const setNameSearch = data => ({
     type: NAME_SEARCH,
    data
});

export const setAgeSearch = data => ({
    type: AGE_SEARCH,
    data,
});
export const setPositionSearch = data => ({
    type: POSITION_SEARCH,
    data,
});
