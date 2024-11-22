import Longitude from "@/domain/ride/enterprise/entities/value-objects/longitude";
import {expect} from "vitest";

it('should create a longitude object', function () {
  const longitude = new Longitude(140);
  expect(longitude).toBeDefined();
});

it('should throw the error if the longitude is less then -180 or more then 180', () => {
  expect(() => new Longitude(-190)).toThrowError('Invalid longitude');
  expect(() => new Longitude(190)).toThrowError('Invalid longitude');
});

