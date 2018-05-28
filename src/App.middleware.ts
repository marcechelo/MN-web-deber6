import { Injectable, MiddlewareFunction, NestMiddleware } from '@nestjs/common';

@Injectable()
export class AppMiddleware implements NestMiddleware {

  private fs = require('fs');

  resolve(nivelDeLog: string): MiddlewareFunction {

    return (request, response, next) => {

      const respuesta = {
        baseUrl: request.baseUrl,
        hostname: request.hostname,
        subdomains: request.subdomains,
        ip: request.ip,
        method: request.method,
        originalUrl: request.originalUrl,
        path: request.path,
        protocol: request.protocol,
        headers: request.headers,
      };

      const salida = 'baseUrl: ' + respuesta.baseUrl + '\n' +
        'hostname: ' + respuesta.hostname + '\n' +
        'subdomains: ' + respuesta.subdomains + '\n' +
        'ip: ' + respuesta.ip + '\n' +
        'method: ' + respuesta.method + '\n' +
        'originalUrl: ' + respuesta.originalUrl + '\n' +
        'path: ' + respuesta.path + '\n' +
        'protocol: ' + respuesta.protocol + '\n' +
        'headers: ' + respuesta.headers;

      if (nivelDeLog === 'consola') {
        console.log(respuesta);

      }
      else if (nivelDeLog === 'archivo') {
        this.fs.writeFile('logs.txt', salida, err => {
          if (err) {
            return console.error(err);
          }
          console.log('File created!');
        });
      }
      else if (nivelDeLog === 'todo') {
        this.fs.writeFile('logs.txt', salida, err => {
          if (err) {
            return console.error(err);
          }
          console.log('File created!');
        });
        console.log(respuesta);
      }
      else {
        console.log('error');
      }
      next();
    };

  }

}
