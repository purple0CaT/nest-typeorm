import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/user/user.module';
import { AuthController } from './controllers/auth.controller';
import { LocalStrategy } from './guards/local.strategy';
import { SessionSerializer } from './guards/session.serializer';
import { AuthService } from './services/auth.service';

@Module({
  imports: [UserModule, PassportModule.register({ session: true })],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, SessionSerializer],
})
export class AuthModule {}
