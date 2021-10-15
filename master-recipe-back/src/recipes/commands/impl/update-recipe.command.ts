import { UpdateRecipeDto } from '../../dto/update-recipe.dto';

export class UpdateRecipeCommand {
  constructor(
    public readonly id: number,
    public readonly updateRecipeDto: UpdateRecipeDto,
  ) {}
}
