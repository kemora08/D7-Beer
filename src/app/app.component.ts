import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { IBeer } from './i-beer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
displayedColumns: string[] = [
  'id',
  'name',
  'tagline',
  'image_url',
  'abv'
];

  constructor() {}

  ngOnInit(): void {
}

 }

