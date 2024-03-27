import { Controller, Get, Param, Query } from '@nestjs/common';
import { ProvinceService } from './province.service';
import { GetProvincesDTO } from '@wilayah-nusantara/dtos';
import { generateResponse } from '~/helper/response';

@Controller('/province')
export class ProvinceController {
  constructor(private readonly provinceService: ProvinceService) {}

  @Get('/')
  public async getProvinces(@Query() getProvincesQuery: GetProvincesDTO) {
    const provinces = await this.provinceService.getProvinces(
      getProvincesQuery,
    );

    var response = generateResponse('Success', { provinces_paginated: provinces },  200);

    return response;
  }

  @Get('/:code')
  public async getProvince(@Param('code') provinceCode: string) {
    const province = await this.provinceService.getProvince(provinceCode);

    var response = generateResponse('Success', { province: province },  200);

    return response;
  }
}
