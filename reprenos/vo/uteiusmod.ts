class Individual {
  private _id: number;
  private _name: string;
  private _age: number;

  constructor(id: number, name: string, age: number) {
    this._id = id;
    this._name = name;
    this._age = age;
  }

  get id(): number {
    return this._id;
  }

  set id(newId: number) {
    this._id = newId;
  }

  get name(): string {
    return this._name;
  }

  set name(newName: string) {
    this._name = newName;
  }

  get age(): number {
    return this._age;
  }

  set age(newAge: number) {
    if (newAge > 0) {
      this._age = newAge;
    }
  }
}
