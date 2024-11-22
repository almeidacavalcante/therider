import {Entity} from "@/core/entities/entity";
import {Coord} from "@/domain/ride/enterprise/entities/value-objects/coord";


export interface RideInput {
  driverId: string
  passengerId: string
  fromLat: number,
  toLat: number,
  fromLong: number,
  toLong: number,
}

export class Ride extends Entity<RideInput> {
  private readonly _from: Coord;
  private readonly _to: Coord;

  constructor(input: RideInput) {
    super(input);
    const from = Coord.create({
      latitude: input.fromLat,
      longitude: input.fromLong
    });
    const to = Coord.create({
      latitude: input.toLat,
      longitude: input.toLong
    });
    this._from = from;
    this._to = to;
  }

  static create(input: RideInput) {
    return new Ride(input);
  }

  get from() {
    return this._from;
  }

  get to() {
    return this._to;
  }

}
