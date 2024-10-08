import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BikesService } from './services/bikes.service';
import { BikesController } from './controllers/bikes.controller';
import { Bike } from './entities/bike.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Bike])],
  controllers: [BikesController],
  providers: [BikesService],
})
export class BikesModule {}
