import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class Hashmd5Service {

  publicKey: string =environment.publicKey;
  privateKey: string =environment.privateKey;
  ts: number =environment.ts;

  constructor() {

  }

  generateMd5(): string {
    return CryptoJS.MD5(`${this.ts}${this.privateKey}${this.publicKey}`).toString();
  }

}
