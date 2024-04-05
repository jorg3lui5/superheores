import { ImagenDto } from './imagen-dto';
import { AditionalInformationDto } from './aditional-information-dto';

export class SuperheroeDto {

    id?: string;
    name?: string;
    description?: string;
    modified?: string;
    thumbnail?: ImagenDto;
    comics?: AditionalInformationDto;
    series?: AditionalInformationDto;
    stories?: AditionalInformationDto;
}
