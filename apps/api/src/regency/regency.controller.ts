import { Controller, Get, Param, Query } from '@nestjs/common';
import { GetRegenciesDTO } from '@wilayah-nusantara/dtos';
import { RegencyService } from './regency.service';
import { generateResponse } from '~/helper/response';

@Controller('/regency')
export class RegencyController {
  constructor(private readonly regencyService: RegencyService) {}

  @Get('/')
  public async getRegencies(@Query() getRegenciesQuery: GetRegenciesDTO) {
    const regencies = await this.regencyService.getRegencies(getRegenciesQuery);

    var response = generateResponse('Success', { regencies_paginated: regencies },  200);

    return response;
  }

  @Get('/:code')
  public async getRegency(@Param('code') regencyCode: string) {
    const regency = await this.regencyService.getRegency(regencyCode);

    var response = generateResponse('Success', { regency: regency },  200);

    return response;
  }
}
