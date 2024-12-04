import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { LoggerMiddleware } from './middlewares/logger/logger.middleware';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('users');

    // consumer.apply(LoggerMiddleware).forRoutes({
    //   path: '/users',
    //   method: RequestMethod.POST,
    // });

    // consumer
    //   .apply(LoggerMiddleware)
    //   .forRoutes('users')
    //   .apply(LoggerMiddleware2)
    //   .forRoutes('auth');
  }
}
