import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsuarioService } from 'src/usuario/usuario.service';
import { AuthService } from './auth.service';

@Module({
  imports: [PrismaService, UsuarioService],
  providers: [AuthService],
})
export class AuthModule {}
