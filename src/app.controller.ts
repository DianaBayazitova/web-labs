import {
  Controller,
  Get,
  Render,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { LoggingInterceptor } from './logging.interceptor';
import { AuthGuard } from './auth/auth.guard';

import { SessionContainer } from 'supertokens-node/recipe/session';
import { Session } from './auth/session.decorator';
import { ApiBasicAuth, ApiResponse } from '@nestjs/swagger';

@UseInterceptors(LoggingInterceptor)
@Controller()
export class AppController {
  @Get()
  @ApiResponse({
    status: 200,
    description: 'OK',
  })
  @Render('index')
  root() {
    return {
      mobile: 'asdasd',
      mail: 'asdasd',
      github: 'sdaasda',
      vk: 'asdasd',
      telegram: 'asdasd',
      instagram: 'asdasd',
    };
  }

  @Get('/index.hbs')
  @ApiResponse({
    status: 200,
    description: 'OK',
  })
  @Render('index')
  @UseGuards(AuthGuard)
  @ApiBasicAuth()
  index(@Session() session: SessionContainer) {
    return {
      mobile: 'asdasd',
      mail: 'asdasd',
      github: 'sdaasda',
      vk: 'asdasd',
      telegram: 'asdasd',
      instagram: 'asdasd',
    };
  }

  @Get('/gallery.hbs')
  @ApiResponse({
    status: 200,
    description: 'OK',
  })
  @Render('gallery')
  gallery() {
    return;
  }
  @Get('/form.hbs')
  @ApiResponse({
    status: 200,
    description: 'OK',
  })
  @Render('form')
  form() {
    return;
  }

  @Get('/login.hbs')
  @ApiResponse({
    status: 200,
    description: 'OK',
  })
  @Render('login')
  login() {
    return;
  }
}
