import { Field, ObjectType } from 'type-graphql';
import { Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Stage } from './Stage';

@ObjectType()
@Entity()
export class Workflow {
	@PrimaryGeneratedColumn()
	@Field()
	id: number;

	@Field(type => [Stage], { defaultValue: [] })
	@OneToMany(type => Stage, stage => stage.workflow)
	stages: Stage[];
}