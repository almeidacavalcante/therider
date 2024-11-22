import { UniqueEntityID } from './unique-entity-id'

export abstract class Entity<Input> {
  private _id: UniqueEntityID
  protected input: Input

  get id() {
    return this._id
  }

  protected constructor(input: Input, id?: UniqueEntityID) {
    this.input = input
    this._id = id ?? new UniqueEntityID()
  }

  public equals(entity: Entity<unknown>) {
    if (entity === this) return true;
    return entity.id === this._id;
  }
}
