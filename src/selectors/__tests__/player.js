import {
  playersByAgeSelector
  ,playersByPositionSelector
  ,playersFilteredSelector
  ,playersFormatAgeSelector
  ,playersSelector } from '../player';
import { mockState } from "../../__test-utils__/mockState";
import moment from "moment/moment";

describe('Selector app :', () => {
  test('playersSelector', () => {
    const data = playersSelector(mockState);
    expect(data).toEqual(mockState.player.data);
  });
  test('playersAgeSelector', () => {
    const data = playersFormatAgeSelector(mockState);
    const playersExpected = (mockState) => mockState.player.data.map(player => ({...player, age:moment().diff(player.dateOfBirth, 'years').toString()}));
    expect(data).toEqual(playersExpected(mockState));
  });
  test('playersByPositionSelector', () => {
    const players = playersByPositionSelector(mockState);
    players.forEach((player) => {
      expect(player.position).toBe(mockState.app.positionSearch);
    });
  });
  test('playersFilteredSelector', () => {
    const players = playersFilteredSelector(mockState);
    players.forEach((player) => {
      expect(player.name).toBe(mockState.app.nameSearch);
    });
  });
  test('playersByAgeSelector', () => {
    const players = playersByAgeSelector(mockState);
    players.forEach((player) => {
      expect(player.age).toBe(mockState.app.ageSearch);
    });
  });
});
