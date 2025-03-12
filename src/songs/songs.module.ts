import { Module } from '@nestjs/common';
import { SongsService } from './songs.service';
import { SongsController } from './songs.controller';
import { AppController } from 'src/app.controller';

@Module({
  imports: [SongsModule],
  controllers: [AppController],
  providers: [SongsService]
})
export class SongsModule {}
