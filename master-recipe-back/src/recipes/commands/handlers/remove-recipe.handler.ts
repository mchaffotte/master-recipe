import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Recipe } from 'src/recipes/entities/recipe.entity';
import { Repository } from 'typeorm';

import { RemoveRecipeCommand } from '../impl/remove-recipe.command';

@CommandHandler(RemoveRecipeCommand)
export class RemoveRecipeHandler
  implements ICommandHandler<RemoveRecipeCommand>
{
  constructor(
    @InjectRepository(Recipe)
    private recipesRepository: Repository<Recipe>,
  ) {}

  async execute(command: RemoveRecipeCommand) {
    await this.recipesRepository.delete(command.id);
  }
}
