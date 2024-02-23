export class ValueError extends Error {
  constructor(message = 'Data already exists') {
    super(message);
    this.name = ValueError.name;
  }
}
