import { getAllCoinCapData } from './coinCapAPI'

it('should not return null', async () => {
  const initialUrl = 'https://api.coincap.io/v2/assets';
  expect.assertions(1);
  const response = await getAllCoinCapData(initialUrl);
  expect(response).not.toBeNull();
})