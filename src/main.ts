import { Logger, ValidationPipe, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import { AppLogger } from '~/app.logger';
import { AppModule } from '~/app.module';
import * as ENV from '~/app.vars';
import { DefaultExceptionsFilter } from '~/config';
import { enableCors } from '~/cors.service';
import { enableSwagger } from '~/swagger.service';

class Main {
  static async bootstrap() {
    const app = await NestFactory.create(AppModule, new ExpressAdapter(), {
      logger: new AppLogger()
    });
    app.useGlobalPipes(
      new ValidationPipe({
        transform: true,
        disableErrorMessages: ENV.IS_PROD,
        forbidUnknownValues: true
      })
    );
    app.use(helmet());
    app.use(rateLimit({ windowMs: 60 * 1000, max: 1000 }));
    app.useGlobalFilters(new DefaultExceptionsFilter());

    const port = process.env.PORT || ENV.APP_PORT;

    app.enableVersioning({
      type: VersioningType.URI,
      prefix: ENV.APP_VERSION_PREFIX,
      defaultVersion: ENV.APP_VERSION
    });

    enableCors(app);
    enableSwagger(app);

    await app
      .listen(port, () => {
        Logger.verbose(`Listen on ${port} 🙌 `, Main.name);
      })
      .catch(error => Logger.error(error));
  }
}
Main.bootstrap();
