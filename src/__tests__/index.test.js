import { countDown } from "../index.js";

test('countdown from 3 to 1', () => {
  expect(countDown(3)).toBe(3, 2, 1);
});

test('countdown from 0', () => {
  expect(countDown(0)).toBe(undefined);
});
