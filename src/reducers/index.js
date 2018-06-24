import { combineReducers } from 'redux';
import app from './app'
import player from './player'

export default combineReducers({
    player,
    app
});
