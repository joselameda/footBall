import axios from 'axios';
import { mockPlayer } from '../../__test-utils__/mockPlayer';
import api from '../../services/api';

const spy = jest.spyOn(axios, 'get');
spy.mockImplementation(() => ({
  data: mockPlayer,
}));

describe('Service api', () => {
  test('should call getAll and return an array of players', async () => {
    const data = await api.getAll();
    expect(data).toEqual(mockPlayer);
  });
});