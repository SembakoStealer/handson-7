import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './create-song.dto';

@Controller('songs')
export class SongsController {
    constructor(private SongsService: SongsService) {}

    @Post()
    create(@Body() CreateSongDTO: CreateSongDTO) {
        return this.SongsService.create(CreateSongDTO);
    }

    @Get()
    findAll() {
        return this.SongsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.SongsService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() createSongDTO: CreateSongDTO){
        return this.SongsService
    }

    @Delete(':id')
    delete(){
        return 'Delete song by id';
    }
}
