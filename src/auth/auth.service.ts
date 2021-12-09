import { Injectable } from '@nestjs/common';
import { UsuarioService } from './../usuario/usuario.service';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(private readonly usuarioService: UsuarioService) {}

  async login(loginUsuarioDto: LoginDto) {
    const user = await this.usuarioService.findByLogin(loginUsuarioDto);

    return;
  }
}
