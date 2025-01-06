import { test, expect } from "vitest";
import { isPrime } from "./is-prime";

test("should return true for 1", () => {
  //act
  const result = isPrime(1);

  //assert
  expect(result).toBe(true);
});

test("should return true for 2", () => {
  //act
  const result = isPrime(2);

  //assert
  expect(result).toBe(true);
});

test("should return true for 3", () => {
  //act
  const result = isPrime(3);

  //assert
  expect(result).toBe(true);
});

test("should return false for 4", () => {
  //act
  const result = isPrime(4);

  //assert
  expect(result).toBe(false);
});

test("should return true for 5", () => {
  //act
  const result = isPrime(5);

  //assert
  expect(result).toBe(true);
});

test("should return false for 6", () => {
  //act
  const result = isPrime(6);

  //assert
  expect(result).toBe(false);
});

test("should return true for 7", () => {
  //act
  const result = isPrime(7);

  //assert
  expect(result).toBe(true);
});
