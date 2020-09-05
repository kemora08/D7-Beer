import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IBeer } from '../i-beer';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private httpService: HttpClient) { }

  async get(path: string, params?: HttpParams): Promise<IBeer[]> {
    return this.httpService.get<IBeer[]>(path, {params}).toPromise();
  }

}

