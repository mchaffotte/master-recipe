import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Recipe {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  instructions: Instruction[];
}

export class Instruction {
  @Column()
  content: string;
}
