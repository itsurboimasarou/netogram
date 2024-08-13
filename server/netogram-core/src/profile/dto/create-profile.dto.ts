import { IsString, IsEmail } from 'class-validator';
export class CreateProfileDto {
  @IsString()
  userName: string;

  @IsEmail()
  email: string;

  @IsString()
  avatarUrl: string;

  @IsString()
  bio: string;

  @IsString()
  uid: string;

}
