import {ValueObject} from "@/core/entities/value-object";
import Longitude from "@/domain/ride/enterprise/entities/value-objects/longitude";
import Latitude from "@/domain/ride/enterprise/entities/value-objects/latitude";

export interface CoordProps {
  latitude: number;
  longitude: number;
}

export class Coord extends ValueObject<CoordProps> {
  private readonly _latitude: Latitude;
  private readonly _longitude: Longitude;
  private constructor(input: CoordProps) {
    super(input);
    this._longitude = new Longitude(input.longitude);
    this._latitude = new Latitude(input.latitude);
  }

  static create(props: CoordProps) {
    return new Coord(props);
  }

  get latitude() {
    return this._latitude;
  }

  get longitude() {
    return this._longitude;
  }

}



