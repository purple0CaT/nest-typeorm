import {
  Controller,
  Get,
  Post,
  Request,
  UseGuards
} from '@nestjs/common';
import { LocalAuthGuard } from '../guards/local.guard';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req: any): any {
    return req.user;
  }

  @Get('protected')
  getUsers(): any {
    return null;
  }
}
