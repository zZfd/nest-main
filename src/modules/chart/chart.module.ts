import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectEntity } from '../../entity/project.entity';
import { ChartController } from './chart.controller';
import { ChartService } from './chart.service';
@Module({
  imports: [TypeOrmModule.forFeature([ProjectEntity])],
  controllers: [ChartController],
  providers: [ChartService],
})
export class ChartModule {}
