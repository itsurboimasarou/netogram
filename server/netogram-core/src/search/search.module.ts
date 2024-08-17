import { Module } from '@nestjs/common';
import { SearchService } from './search.service';
import { SearchController } from './search.controller';
import { IdgenModule } from '../utils/idgen/idgen.module';

@Module({
  imports: [
    IdgenModule,
  ],
  controllers: [SearchController],
  providers: [SearchService],
  exports: [SearchService]
})
export class SearchModule {}
