export class CreateRecipeDto {
  name: string;
  instructions: InstructionDto[];
}

export class InstructionDto {
  content: string;
}
