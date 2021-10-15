import { ICommandHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Recipe } from 'src/recipes/entities/recipe.entity';
import { Repository } from 'typeorm';

import { FindAllRecipesQuery } from '../impl/find-all-recipes.query';

@QueryHandler(FindAllRecipesQuery)
export class FindAllRecipesHandler
  implements ICommandHandler<FindAllRecipesQuery>
{
  constructor(
    @InjectRepository(Recipe)
    private recipesRepository: Repository<Recipe>,
  ) {}

  async execute(command: FindAllRecipesQuery): Promise<Recipe[]> {
    return this.recipesRepository.find();
  }
}
