import { Controller, Get, Req, Res } from '@nestjs/common';

@Controller('Controlador')
export class CookieController {

  @Get(':nombre')
  leerCookie(@Req() request, @Res() response) {

    const nombreCookie = request.params.nombre;
    const existeCookie = request.cookies[nombreCookie];
    if (existeCookie) {
      return response.send({mensaje: 'EN CACHE'});
    } else {
      return response.status(404).send({mensaje: 'NO EN CACHE'});
    }
  }

  @Get('ejemplo')
  ejemplo(@Res() response){
    return response.send('Mensaje de prueba');
  }
}