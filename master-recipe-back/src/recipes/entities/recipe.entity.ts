export class Recipe {
  id: number;
  name: string;
  instructions: Instruction[];
}

export class Instruction {
  content: string;
}
