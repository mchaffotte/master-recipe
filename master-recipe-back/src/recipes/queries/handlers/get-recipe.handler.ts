import { ICommandHandler, QueryHandler } from '@nestjs/cqrs';

import { GetRecipeQuery } from '../impl/get-recipe.query';

@QueryHandler(GetRecipeQuery)
export class GetRecipeHandler implements ICommandHandler<GetRecipeQuery> {
  async execute(command: GetRecipeQuery) {
    return `This action returns a #${command.id} recipe`;
  }
}
