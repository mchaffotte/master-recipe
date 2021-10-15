import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { RecipesService } from './recipes.service';
import { RecipesController } from './recipes.controller';
import { CommandHandlers } from './commands/handlers';
import { QueryHandlers } from './queries/handlers';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Recipe } from './entities/recipe.entity';

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([Recipe])],
  controllers: [RecipesController],
  providers: [RecipesService, ...CommandHandlers, ...QueryHandlers],
})
export class RecipesModule {}
