import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class PictureDto {
  @IsNotEmpty()
  @IsString()
  title: string;
  @IsNotEmpty()
  @IsString()
  @IsUrl()
  url: string;
}
