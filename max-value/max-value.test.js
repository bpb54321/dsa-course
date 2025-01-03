import { expect, test } from "vitest";
import { findMaxValue } from "./max-value";

test("finds the max value in an array of positive numbers", () => {
  //arrange
  const array = [4, 7, 2, 8, 10, 9];

  //act
  const result = findMaxValue(array);

  //assert
  expect(result).toBe(10);
});

test("finds the max value in a second array of positive numbers", () => {
  //arrange
  const array = [10, 5, 40, 40.3];

  //act
  const result = findMaxValue(array);

  //assert
  expect(result).toBe(40.3);
});

test("finds the max value in an array of negative numbers", () => {
  //arrange
  const array = [-3, -1000000, -1];

  //act
  const result = findMaxValue(array);

  //assert
  expect(result).toBe(-1);
});
