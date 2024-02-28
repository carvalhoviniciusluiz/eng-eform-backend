export class NotFoundError extends Error {
  constructor(message = 'Not found error') {
    super(message);
    this.name = NotFoundError.name;
  }
}
