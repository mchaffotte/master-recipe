import { ICommandHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Recipe } from 'src/recipes/entities/recipe.entity';
import { Repository } from 'typeorm';

import { GetRecipeQuery } from '../impl/get-recipe.query';

@QueryHandler(GetRecipeQuery)
export class GetRecipeHandler implements ICommandHandler<GetRecipeQuery> {
  constructor(
    @InjectRepository(Recipe)
    private recipesRepository: Repository<Recipe>,
  ) {}

  async execute(command: GetRecipeQuery) {
    return this.recipesRepository.findOne(command.id);
  }
}
