import { Injectable } from '@angular/core';
import { APIService } from './api.service';
import { IBeer } from '../i-beer';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private readonly BEERS_URL = 'https://api.punkapi.com/v2/beers';
  constructor(private apiService: APIService) { }

  async getBeers(): Promise<IBeer[]> {
    return this.apiService.get(this.BEERS_URL);
  }
  
  async newBeers(count: number): Promise<IBeer[]> {
    return this.apiService.get(this.BEERS_URL, new HttpParams().append('per_page', count.toString()));
  }
}
