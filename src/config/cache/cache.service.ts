import { CacheModuleOptions, CacheOptionsFactory, Injectable } from '@nestjs/common';
import { CACHE_MAX_NUMBER, CACHE_TIME_TO_LIVE } from '~/app.vars';

@Injectable()
export class CacheService implements CacheOptionsFactory {
  createCacheOptions(): CacheModuleOptions {
    return {
      ttl: Number(CACHE_TIME_TO_LIVE),
      max: Number(CACHE_MAX_NUMBER)
    };
  }
}
