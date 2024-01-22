import { Controller, Get } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AppConfigService } from '@services/app_config.service';

@Controller('config')
export class AppConfigController {
  constructor(private AppConfigService: AppConfigService) {}

  @Get()
  async index() {
    const config = await this.AppConfigService.public_config();

    return config;
  }
}
