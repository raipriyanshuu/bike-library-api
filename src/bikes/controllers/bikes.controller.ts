import { Controller, Get, Post, Body, Put, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { BikesService } from '../services/bikes.service';
import { CreateBikeDto } from '../dto/create-bike.dto';

@Controller('bikes')
export class BikesController {
  constructor(private readonly bikesService: BikesService) {}

  // Endpoint to create a new bike, uses POST method
  @Post()
  async create(@Body() createBikeDto: CreateBikeDto) {
    return this.bikesService.create(createBikeDto);
  }

  // Endpoint to retrieve all bikes, uses GET method
  @Get()
  async findAll() {
    return this.bikesService.findAll();
  }

  // Endpoint to retrieve a specific bike by ID, uses GET method
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.bikesService.findOne(id);
  }

  // Endpoint to update a specific bike by ID, uses PUT method
  @Put(':id')
  async update(@Param('id') id: string, @Body() createBikeDto: CreateBikeDto) {
    return this.bikesService.update(id, createBikeDto);
  }

  // Endpoint to delete a specific bike by ID, uses DELETE method
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT) // Sets the HTTP status code to 204 No Content
  async remove(@Param('id') id: string) {
    await this.bikesService.remove(id);
  }
}


