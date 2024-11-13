import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { DataSource } from 'typeorm';
import { Article } from './entities/article.entity';

@Controller('articles')
export class ArticleController {
  constructor(private readonly dataSource: DataSource,
    private readonly articleService: ArticleService
  ) {}

  @Post()
  async create(@Body() body) {
    const articleRepo = this.dataSource.getRepository(Article);
    const article = new Article();
    const {title, text} = body;

    if (!title || !text) {
      throw new HttpException(
        'Title or text is missing!',
        HttpStatus.BAD_REQUEST
      );
    }

    article.title = title;
    article.body = text;

    await articleRepo.save(article);

    return {message: 'Article created successfully', article: article};
  }

  @Get()
  findAll() {
    return this.articleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.articleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateArticleDto: UpdateArticleDto) {
    return this.articleService.update(+id, updateArticleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.articleService.remove(+id);
  }
}
