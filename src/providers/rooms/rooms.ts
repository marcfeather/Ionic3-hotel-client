import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class RoomsProvider {

  constructor(public http: Http) {

  }


  public getRooms(options: any) {

    return new Promise((resolve) => {

      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      this.http.post('http://localhost:8080/api/rooms', JSON.stringify(options), {headers: headers})
        .map((res) => res.json())
        .subscribe((data) => {
          resolve(data);
        });
    });

  }

  public reserveRoom(data: any) {

    return new Promise((resolve) => {

      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      this.http.post('http://localhost:8080/api/rooms/reserve', JSON.stringify(data), {headers: headers})
        .subscribe((data) => {
          resolve(data);
        });
    });

  }
}
