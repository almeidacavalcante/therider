import Latitude from "@/domain/ride/enterprise/entities/value-objects/latitude";
import {expect} from "vitest";

it('should create a latitude object', function () {
  const latitude = new Latitude(55);
  expect(latitude).toBeDefined();
});

it('should throw the error if the latitude is less then -90 or more then 90', () => {
  expect(() => new Latitude(-100)).toThrowError('Invalid latitude');
  expect(() => new Latitude(100)).toThrowError('Invalid latitude');
})

