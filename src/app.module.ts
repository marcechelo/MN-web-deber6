import { MiddlewareConsumer, Module, NestMiddleware, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppMiddleware } from './App.middleware';
import { CookieController } from './cookie.controller';

@Module({
  imports: [],
  controllers: [AppController, CookieController],
  providers: [ AppService ],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer): MiddlewareConsumer | void {
    consumer.apply(AppMiddleware).with('todo').forRoutes(AppController, CookieController);
    return undefined;
  }
}
