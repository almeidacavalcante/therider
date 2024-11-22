export abstract class ValueObject<Input> {
  protected input: Input

  protected constructor(input: Input) {
    this.input = input
  }

  public equals(vo: ValueObject<unknown>) {
    if (vo === null || vo === undefined) {
      return false
    }

    if (vo.input === undefined) {
      return false
    }

    return JSON.stringify(vo.input) === JSON.stringify(this.input)
  }
}
