import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthenticatedGuard } from '../guards/authenticated.guard';
import { LocalAuthGuard } from '../guards/local.guard';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req: any): any {
    return { msg: 'logged in' };
  }

  @UseGuards(AuthenticatedGuard)
  @Get('protected')
  getUsers(@Request() req: any): any {
    return req.user;
  }
}
