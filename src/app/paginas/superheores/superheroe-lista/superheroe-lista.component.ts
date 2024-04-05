import { Component, OnInit } from '@angular/core';
import { SuperheroeDto } from '../../../modelo/dto/superheroe-dto';
import { SuperheroeService } from '../../../servicios/superheroe.service';
import { Superheroe } from 'src/app/modelo/superheroe';
import { TranslateService } from '@ngx-translate/core';

/* muestra la lista de superheroes
 */
@Component({
  selector: 'app-superheroe-lista',
  templateUrl: './superheroe-lista.component.html',
  styleUrls: ['./superheroe-lista.component.scss'],
})
export class SuperheroeListaComponent implements OnInit {
  superheroes: Superheroe[]=[];

  constructor(
    private translate: TranslateService,
    private _superheroeService: SuperheroeService
  ) { }

  ngOnInit() {
    this.getSuperheroes();
  }


  getSuperheroes(){
    this._superheroeService.list().subscribe({
      next:(result) => {
        if(result!.data!.results){
          const superheroes: SuperheroeDto[] = result.data.results;
          superheroes.forEach((superheore) => {
            this.superheroes.push( this.convertSuperheroeDtoToSuperheroe(superheore));
          });
        }
      },
      error:(error) => {
        console.log(error);
      }
    })
  }

  convertSuperheroeDtoToSuperheroe(superheroeDto: SuperheroeDto): Superheroe {
    return {
      id: superheroeDto.id,
      name: superheroeDto.name,
      description: superheroeDto.description,
      modified: superheroeDto.modified,
      picture: `${superheroeDto.thumbnail?.path}.${superheroeDto.thumbnail?.extension}`,
      aditionalInformation: {
        comicsAvailable: superheroeDto.comics?.available,
        seriesAvailable: superheroeDto.series?.available,
        storiesAvailable: superheroeDto.stories?.available
      }
    } as Superheroe;
  }

}
