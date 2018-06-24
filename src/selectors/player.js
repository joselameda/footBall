import moment from 'moment';
import { createSelector } from 'reselect';
import * as appSelectors from './app';

export const playersSelector = state => state.player.data;

export const playersFormatAgeSelector = createSelector(
    playersSelector,
    players =>(Object.keys(players).length !== 0)? players.map(player => ({...player, age:moment().diff(player.dateOfBirth, 'years').toString()})) : ""
);

export const playersByPositionSelector = createSelector(
    playersFormatAgeSelector,
    appSelectors.positionSearchSelector,
    // Preventing null or undefined values
    (players, positionSearch) => (!positionSearch
        ? players
        : players
            .filter(player =>
                player.position && player.position.toLowerCase() === positionSearch.toLowerCase())),
);

export const playersByAgeSelector = createSelector(
    playersByPositionSelector,
    appSelectors.ageSearchSelector,
    (players, ageSearch) => (!ageSearch
        ? players
        // Search from start of age
        : players
            .filter(player => player.age.slice(0, ageSearch.length) === ageSearch)),
);


export const playersFilteredSelector = createSelector(
    playersByAgeSelector,
    appSelectors.nameSearchSelector,
    (players, nameSearch) => (!nameSearch
        ? players
        : players
            .filter(player =>
                player.name && player.name.toLowerCase().includes(nameSearch.toLowerCase()))),
);
