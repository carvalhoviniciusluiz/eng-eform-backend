export class DataBaseError extends Error {
  constructor(message = 'Data Base error') {
    super(message);
    this.name = DataBaseError.name;
  }
}
