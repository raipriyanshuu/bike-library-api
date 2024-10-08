import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { BikesService } from '../services/bikes.service';
import { CreateBikeDto } from '../dto/create-bike.dto';

// Controller to handle requests related to Bikes
@Controller('bikes')
export class BikesController {
  constructor(private readonly bikesService: BikesService) {}

  // Creates a new bike entry
  @Post()
  create(@Body() createBikeDto: CreateBikeDto) {
    return this.bikesService.create(createBikeDto);
  }
  // Retrieves all bikes

  @Get()
  findAll() {
    return this.bikesService.findAll();
  }

    // Retrieves a single bike by ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bikesService.findOne(id);
  }
   // Updates a bike entry by ID

  @Put(':id')
  update(@Param('id') id: string, @Body() createBikeDto: CreateBikeDto) {
    return this.bikesService.update(id, createBikeDto);
  }

   // Deletes a bike entry by ID
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bikesService.remove(id);
  }
}
