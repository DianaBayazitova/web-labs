import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Picture } from '@prisma/client';
import { PictureService } from './picture.service';
import { PictureDto } from './picture-dto';

@ApiTags('picture')
@Controller('pictures')
export class PictureController {
  constructor(private readonly pictureService: PictureService) {}

  @ApiOperation({
    summary: 'Get All Pictures',
  })
  @ApiResponse({
    status: 200,
    description: 'OK',
  })
  @Get()
  async getPictures(): Promise<Picture[]> {
    return await this.pictureService.getPictures();
  }

  @ApiOperation({
    summary: 'Get picture by ID',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid ID format',
  })
  @ApiResponse({
    status: 200,
    description: 'OK',
  })
  @Get(':id')
  async getPicture(@Param('id') id: number): Promise<Picture> {
    return await this.pictureService.getPicture(id);
  }
}
