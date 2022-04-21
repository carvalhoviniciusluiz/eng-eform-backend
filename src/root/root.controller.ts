import { Controller, Get, VERSION_NEUTRAL } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { RootService } from '~/root/root.service';

@ApiTags('Root')
@Controller({
  version: VERSION_NEUTRAL
})
export class RootController {
  constructor(private readonly rootService: RootService) {}

  @Get()
  getHello(): string {
    return this.rootService.getHello();
  }
}
