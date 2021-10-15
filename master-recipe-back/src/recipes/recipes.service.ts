import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';

import { CreateRecipeCommand } from './commands/impl/create-recipe.command';
import { UpdateRecipeCommand } from './commands/impl/update-recipe.command';
import { RemoveRecipeCommand } from './commands/impl/remove-recipe.command';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { FindAllRecipesQuery } from './queries/impl/find-all-recipes.query';
import { GetRecipeQuery } from './queries/impl/get-recipe.query';

@Injectable()
export class RecipesService {
  constructor(private commandBus: CommandBus, private queryBus: QueryBus) {}

  async create(createRecipeDto: CreateRecipeDto) {
    return this.commandBus.execute(new CreateRecipeCommand(createRecipeDto));
  }

  async findAll() {
    return this.queryBus.execute(new FindAllRecipesQuery());
  }

  async findOne(id: number) {
    return this.queryBus.execute(new GetRecipeQuery(id));
  }

  async update(id: number, updateRecipeDto: UpdateRecipeDto) {
    return this.commandBus.execute(
      new UpdateRecipeCommand(id, updateRecipeDto),
    );
  }

  async remove(id: number) {
    return this.commandBus.execute(new RemoveRecipeCommand(id));
  }
}
