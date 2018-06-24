import { SET_PLAYERS } from '../constants/player';

export const setPlayers = data => ({
    type: SET_PLAYERS,
    data,
});

export default setPlayers;