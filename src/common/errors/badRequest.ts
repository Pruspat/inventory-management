export class BadRequestError extends Error {
  public statusCode: number;
  constructor(message: string) {
    super(message);
    this.statusCode = 400;
    Error.captureStackTrace(this, this.constructor);
  }
}
