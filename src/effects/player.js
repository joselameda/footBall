import api from '../services/api';
import { actions } from '../actions';

export const fetchPlayers = () => async (dispatch) => {
    const data = await api.getAll();
    dispatch(actions.player(data));
};
