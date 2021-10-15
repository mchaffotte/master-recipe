import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Recipe } from 'src/recipes/entities/recipe.entity';
import { Repository } from 'typeorm';

import { CreateRecipeCommand } from '../impl/create-recipe.command';

@CommandHandler(CreateRecipeCommand)
export class CreateRecipeHandler
  implements ICommandHandler<CreateRecipeCommand>
{
  constructor(
    @InjectRepository(Recipe)
    private recipesRepository: Repository<Recipe>,
  ) {}

  async execute(command: CreateRecipeCommand): Promise<Recipe> {
    const recipeDto = command.createRecipeDto;
    const recipe = new Recipe();
    recipe.name = recipeDto.name;
    return this.recipesRepository.save(recipe);
  }
}
