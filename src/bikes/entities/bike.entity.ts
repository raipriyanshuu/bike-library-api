import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

// Entity definition for a Bike, mapping to the database table
@Entity()
export class Bike {
  @PrimaryGeneratedColumn('uuid')
  id: string;  // Unique identifier for each bike

  @Column()
  make: string;  // Manufacturer of the bike

  @Column()
  model: string; // Model of the bike

  @Column()
  year: number;  // Year of manufacture

  @Column()
  type: string;  // Type of bike (e.g., Cruiser, Sport)
}

