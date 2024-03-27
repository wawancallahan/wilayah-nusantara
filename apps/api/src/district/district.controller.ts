import { Controller, Get, Param, Query } from '@nestjs/common';
import { GetDistrictsDTO } from '@wilayah-nusantara/dtos';
import { DistrictService } from './district.service';
import { generateResponse } from '~/helper/response';

@Controller('/district')
export class DistrictController {
  constructor(private readonly districtService: DistrictService) {}

  @Get('/')
  public async getDistricts(@Query() getDistrictsQuery: GetDistrictsDTO) {
    const districts = await this.districtService.getDistricts(
      getDistrictsQuery,
    );

    var response = generateResponse('Success', { districts_paginated: districts },  200);

    return response;
  }

  @Get('/:code')
  public async getDistrict(@Param('code') DistrictCode: string) {
    const district = await this.districtService.getDistrict(DistrictCode);

    var response = generateResponse('Success', { district: district },  200);

    return response;
  }
}
