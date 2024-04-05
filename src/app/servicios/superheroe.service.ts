import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { SuperheroeDto } from '../modelo/dto/superheroe-dto';
import { Hashmd5Service } from './hashmd5.service';

@Injectable({
  providedIn: 'root'
})
export class SuperheroeService {

  urlBase: string =environment.urlBase;
  servicio: string= "characters";
  url: string = `${this.urlBase}${this.servicio}`;
  publicKey: string =environment.publicKey;
  ts: number =environment.ts;

  constructor(
    private http: HttpClient,
    private hashmd5Service: Hashmd5Service,
  ) {

  }

  list(): Observable<any> {
    let apiURL = `${this.url}?ts=${this.ts}&apikey=${this.publicKey}&hash=${this.hashmd5Service.generateMd5()}`;
    return this.http.get<any>(apiURL)
  }

}
