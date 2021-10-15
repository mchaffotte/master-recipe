import { ICommandHandler, QueryHandler } from '@nestjs/cqrs';

import { FindAllRecipesQuery } from '../impl/find-all-recipes.query';

@QueryHandler(FindAllRecipesQuery)
export class FindAllRecipesHandler
  implements ICommandHandler<FindAllRecipesQuery>
{
  async execute(command: FindAllRecipesQuery) {
    return `This action returns all recipes`;
  }
}
