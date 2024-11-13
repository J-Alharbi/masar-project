import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleModule } from './article/article.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ArticleModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '',
    database: 'masar-project',
    autoLoadEntities: true,
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: false,
    logging: false,
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
