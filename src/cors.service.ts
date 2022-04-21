import { INestApplication } from '@nestjs/common';

export const enableCors = (app: INestApplication) => {
  app.enableCors({
    origin: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    preflightContinue: false,
    optionsSuccessStatus: 200
  });
};
