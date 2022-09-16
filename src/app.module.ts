import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { PictureModule } from './picture/picture.module';
import { UserService } from './user/user.service';
import { PrismaService } from './prisma.service';
import { PictureService } from './picture/picture.service';
import { AuthModule } from './auth/auth.module';
import { UserController } from './user/user.controller';
import { PictureController } from './picture/picture.controller';
import { AppGateway } from './app.gateway';

@Module({
  imports: [
    AuthModule.forRoot({
      // try.supertokens.com is for demo purposes. Replace this with the address of your core instance (sign up on supertokens.com), or self host a core.
      connectionURI:
        'https://1c5db801353b11edb9630709def7a080-eu-west-1.aws.supertokens.io:3573',
      apiKey: 'KBBpfwBQpIfwHtneGI-O1QsOi1sAVE',
      appInfo: {
        // Learn more about this on https://supertokens.com/docs/emailpassword/appinfo
        appName: 'webprogramminglabs',
        // apiDomain: 'localhost:3000',
        apiDomain: 'https://webprogramminglabs.herokuapp.com',
        // websiteDomain: 'localhost:3000',
        websiteDomain: 'https://webprogramminglabs.herokuapp.com',
        apiBasePath: '/api',
        websiteBasePath: '/auth',
      },
    }),
    ConfigModule.forRoot(),
    UserModule,
    PictureModule,
  ],
  controllers: [AppController, UserController, PictureController],
  providers: [
    AppService,
    PictureService,
    PrismaService,
    UserService,
    AppGateway,
  ],
})
export class AppModule {}