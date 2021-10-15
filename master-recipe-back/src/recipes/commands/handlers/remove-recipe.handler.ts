import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { RemoveRecipeCommand } from '../impl/remove-recipe.command';

@CommandHandler(RemoveRecipeCommand)
export class RemoveRecipeHandler
  implements ICommandHandler<RemoveRecipeCommand>
{
  async execute(command: RemoveRecipeCommand) {
    return `This action removes a #${command.id} recipe`;
  }
}
