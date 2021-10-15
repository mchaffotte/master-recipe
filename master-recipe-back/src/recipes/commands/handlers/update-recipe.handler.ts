import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { UpdateRecipeCommand } from '../impl/update-recipe.command';

@CommandHandler(UpdateRecipeCommand)
export class UpdateRecipeHandler
  implements ICommandHandler<UpdateRecipeCommand>
{
  async execute(command: UpdateRecipeCommand) {
    const { name } = command.updateRecipeDto;
    return `This action updates a #${command.id} recipe ${name}`;
  }
}
