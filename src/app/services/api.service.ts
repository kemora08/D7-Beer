import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private httpService: HttpClient) { }

  async get(path) {
    return await this.httpClient.get<any[]>(this.url + path).toPromise();
  }

}

