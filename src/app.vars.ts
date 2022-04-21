import { ConfigService } from '@nestjs/config';
import * as dotenv from 'dotenv';

dotenv.config();

const configService = new ConfigService();

export const NODE_ENV = configService.get<string>('NODE_ENV');
export const APP_PORT = configService.get<number>('APP_PORT');
export const APP_VERSION = configService.get<string>('APP_VERSION');
export const APP_VERSION_PREFIX = configService.get<string>('APP_VERSION_PREFIX');
export const APP_BACKEND_API_URL = configService.get<string>('APP_BACKEND_API_URL');

export const IS_PROD = NODE_ENV === 'production';
export const IS_TEST = NODE_ENV === 'test';
export const IS_DEV = !IS_TEST && !IS_PROD;

export const JWT_SECRET = configService.get<string>('JWT_SECRET');
export const JWT_SECRET_EXPIRES_IN = configService.get<string>('JWT_SECRET_EXPIRES_IN');
export const JWT_SECRET_REFRESHTOKEN = configService.get<string>('JWT_SECRET_REFRESHTOKEN');
export const JWT_SECRET_REFRESHTOKEN_EXPIRES_IN = configService.get<string>('JWT_SECRET_REFRESHTOKEN_EXPIRES_IN');

export const CACHE_MAX_NUMBER = configService.get<string>('CACHE_MAX_NUMBER');
export const CACHE_TIME_TO_LIVE = configService.get<string>('CACHE_TIME_TO_LIVE');
