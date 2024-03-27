import { Controller, Get, Param, Query } from '@nestjs/common';
import { GetVillagesDTO } from '@wilayah-nusantara/dtos';
import { VillageService } from './village.service';
import { generateResponse } from '~/helper/response';
@Controller('/village')
export class VillageController {
  constructor(private readonly villageService: VillageService) {}

  @Get('/')
  public async getVillages(@Query() getVillagesQuery: GetVillagesDTO) {
    const villages = await this.villageService.getVillages(getVillagesQuery);

    var response = generateResponse('Success', { villages_paginated: villages },  200);

    return response;
  }

  @Get('/:code')
  public async getVillage(@Param('code') DistrictCode: string) {
    const village = await this.villageService.getVillage(DistrictCode);

    var response = generateResponse('Success', { village: village },  200);

    return response;
  }
}
