import {ValueObject} from "@/core/entities/value-object";


export default class Longitude extends ValueObject<number> {
  constructor(value: number) {
    super(value);
    this.validate(value);
  }

  private validate(value: number) {
    if (value < -180 || value > 180) throw new Error('Invalid longitude');
  }

  get value() {
    return this.input;
  }
}
