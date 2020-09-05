import { Injectable } from '@angular/core';
import { APIService } from './api.service';
import { IBeer } from '../i-beer';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private readonly BEERS_URL = 'https://api.punkapi.com/v25/beers';
  constructor(private apiService: APIService) { }

  async getBeers(): Promise<IBeer[]> {
    return this.apiService.get(this.BEERS_URL);
  }
}
