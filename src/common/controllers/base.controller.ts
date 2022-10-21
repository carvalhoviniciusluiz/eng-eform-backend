import { BadRequestException } from '@nestjs/common';
import { AppLogger } from '~/app.logger';

export class BaseController {
  constructor(readonly logger: AppLogger, context: string) {
    this.logger.setContext(context);
  }

  reportLoggerAndThrowException(error: any, meta?: any) {
    this.logger.fail({
      code: error.code,
      message: error?.meta?.cause ?? error?.message,
      error: error.stack,
      meta
    });

    throw new BadRequestException();
  }
}
