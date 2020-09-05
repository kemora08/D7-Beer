import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { IBeer } from './i-beer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  beers: IBeer[] = [];

  constructor(private dataService: DataService) {}

  async ngOnInit(): Promise<void> {
    this.beers =  await this.dataService.getBeers();
  }
 }

