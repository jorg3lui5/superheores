import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { SuperheroeDto } from '../modelo/dto/superheroe-dto';
import { Hashmd5Service } from './hashmd5.service';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService  {

  private data: any;

  constructor(
  ) {

  }

  setData(data: any) {
    this.data = data;
  }

  getData() {
    return this.data;
  }
}
