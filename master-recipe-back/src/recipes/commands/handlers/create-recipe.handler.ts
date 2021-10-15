import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { CreateRecipeCommand } from '../impl/create-recipe.command';

@CommandHandler(CreateRecipeCommand)
export class CreateRecipeHandler
  implements ICommandHandler<CreateRecipeCommand>
{
  async execute(command: CreateRecipeCommand) {
    const { name } = command.createRecipeDto;
    return `This action adds a new recipe ${name}`;
  }
}
