import { CreateRecipeDto } from '../../dto/create-recipe.dto';

export class CreateRecipeCommand {
  constructor(public readonly createRecipeDto: CreateRecipeDto) {}
}
