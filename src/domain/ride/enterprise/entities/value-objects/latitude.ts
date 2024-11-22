import {ValueObject} from "@/core/entities/value-object";


export default class Latitude extends ValueObject<number> {
  constructor(value: number) {
    super(value);
    this.validate(value);
  }

  private validate(value: number) {
    if (value < -90 || value > 90) throw new Error('Invalid latitude');
  }

  get value() {
    return this.input;
  }
}
