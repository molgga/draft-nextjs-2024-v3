export const throwNotFound = (message = 'Not Found') => {
  throw new NotFoundError(message);
};

export const throwError = (message: string | number = 'Error') => {
  throw new UnknownError(message.toString());
};

export const ErrorDigestCode = Object.freeze({
  BadRequest: 'BadRequest',
  NotFound: 'NotFound',
  Unauthorized: 'Unauthorized',
});

class CustomError extends Error {
  digest = 'error';
}

export class UnknownError extends CustomError {
  constructor(message: string) {
    super(message);
    this.digest = message;
  }
}

export class BadRequestError extends CustomError {
  digest = ErrorDigestCode.BadRequest;
}

export class NotFoundError extends CustomError {
  digest = ErrorDigestCode.NotFound;
}

export class UnauthorizedError extends CustomError {
  digest = ErrorDigestCode.Unauthorized;
}
