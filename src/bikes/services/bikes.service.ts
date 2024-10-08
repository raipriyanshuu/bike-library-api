import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bike } from '../entities/bike.entity';
import { CreateBikeDto } from '../dto/create-bike.dto';

@Injectable()
export class BikesService {
  constructor(
    @InjectRepository(Bike)
    private bikeRepository: Repository<Bike>,
  ) {}

  // Creates a new bike in the database with proper data validation
  async create(createBikeDto: CreateBikeDto): Promise<Bike> {
    if (!createBikeDto.make || !createBikeDto.model || !createBikeDto.year || !createBikeDto.type) {
      // Throw an exception if any required bike property is missing
      throw new BadRequestException('Missing required bike properties');
    }
    const bike = this.bikeRepository.create(createBikeDto);
    return this.bikeRepository.save(bike);
  }

  // Retrieves all bikes from the database
  async findAll(): Promise<Bike[]> {
    return this.bikeRepository.find();
  }

  // Retrieves a single bike by ID, throws an error if not found
  async findOne(id: string): Promise<Bike> {
    const bike = await this.bikeRepository.findOneBy({ id });
    if (!bike) {
      throw new NotFoundException(`Bike with ID ${id} not found`);
    }
    return bike;
  }

  // Updates a bike in the database, requires finding the bike first
  async update(id: string, updateBikeDto: CreateBikeDto): Promise<Bike> {
    const bike = await this.findOne(id); // Ensure the bike exists
    this.bikeRepository.merge(bike, updateBikeDto);
    return this.bikeRepository.save(bike);
  }

  // Deletes a bike from the database, throws an error if the bike does not exist
  async remove(id: string): Promise<void> {
    const result = await this.bikeRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Bike with ID ${id} not found`);
    }
  }
}

