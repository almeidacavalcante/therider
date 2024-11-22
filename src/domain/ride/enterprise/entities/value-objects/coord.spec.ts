import Latitude from "@/domain/ride/enterprise/entities/value-objects/latitude";
import {expect} from "vitest";
import Longitude from "@/domain/ride/enterprise/entities/value-objects/longitude";
import {Coord} from "@/domain/ride/enterprise/entities/value-objects/coord";

it ('should create a coord object', function () {
  const latitude = new Latitude(55);
  const longitude = new Longitude(140);
  const coord = Coord.create({latitude, longitude});
  expect(coord).toBeDefined();
});


