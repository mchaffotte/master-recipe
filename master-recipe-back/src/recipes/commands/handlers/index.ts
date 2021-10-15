import { CreateRecipeHandler } from './create-recipe.handler';
import { RemoveRecipeHandler } from './remove-recipe.handler';
import { UpdateRecipeHandler } from './update-recipe.handler';

export const CommandHandlers = [
  CreateRecipeHandler,
  RemoveRecipeHandler,
  UpdateRecipeHandler,
];
