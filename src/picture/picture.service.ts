import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaClient, Picture } from '@prisma/client';
import { PictureDto } from './picture-dto';
import { ApiResponse } from "@nestjs/swagger";

const prisma = new PrismaClient();

@Injectable()
export class PictureService {
  async getPictures(): Promise<Picture[]> {
    const pictures = await prisma.picture.findMany();
    return pictures;
  }

  async getPicture(id: number): Promise<Picture> {
    if (!+id)
      throw new HttpException('Picture ID Provided is not a number!', 400);
    const picture = await prisma.picture.findUnique({
      where: {
        id: +id,
      },
    });
    if (picture) {
      return picture;
    }
    throw new NotFoundException("Picture doesn't exist!");
  }
}
