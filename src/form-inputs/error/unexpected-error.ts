export class UnexpectedError extends Error {
  constructor(message = 'Something went wrong. Please try again soon') {
    super(message);
    this.name = UnexpectedError.name;
  }
}
