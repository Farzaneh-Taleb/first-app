import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class HttpService {

  constructor(private http: Http) { }
  getData() {
    return this.http.get('https://api.myjson.com/bins/cf74d').map((response: Response) => response.json()) ;
  }
}
