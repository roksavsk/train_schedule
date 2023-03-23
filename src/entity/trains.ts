import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Trains {
    @PrimaryGeneratedColumn()
        id!: number;

    @Column()
        train_number!: string;

    @Column()
        departure_station!: string;

    @Column()
        arrival_station!: string;

    @Column('datetime')
        departure_time!: string;

    @Column('datetime')
        arrival_time!: string;
}