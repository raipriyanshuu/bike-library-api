import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bike } from '../entities/bike.entity';
import { CreateBikeDto } from '../dto/create-bike.dto';

// Service to handle all business logic for bike operations
@Injectable()
export class BikesService {
  constructor(
    @InjectRepository(Bike)
    private bikesRepository: Repository<Bike>,
  ) {}

  // Saves a new bike to the database

  create(createBikeDto: CreateBikeDto): Promise<Bike> {
    const bike = this.bikesRepository.create(createBikeDto);
    return this.bikesRepository.save(bike);
  }
  // Fetches all bikes from the database

  findAll(): Promise<Bike[]> {
    return this.bikesRepository.find();
  }

   // Fetches a single bike by ID from the database

  findOne(id: string): Promise<Bike> {
    return this.bikesRepository.findOneBy({ id });
  }

  //Updates a bike record in the database by merging and saving the new data

  async update(id: string, updateBikeDto: CreateBikeDto): Promise<Bike> {
    const bike = await this.findOne(id);
    if (bike) {
      this.bikesRepository.merge(bike, updateBikeDto);
      return this.bikesRepository.save(bike);
    }
    return null;
  }

  // Deletes a bike record from the database by ID

  async remove(id: string): Promise<void> {
    await this.bikesRepository.delete(id);
  }
}
