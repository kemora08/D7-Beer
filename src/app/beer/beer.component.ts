import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IBeer } from '../i-beer';
import { MatPaginator } from '@angular/material/paginator';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'name',
    'tagline',
    'image_url',
    'abv'
  ];

  dataSource: MatTableDataSource<IBeer>;
  @ViewChild(MatSort, {static: true})sort: MatSort;
  @ViewChild(MatPaginator, {static: true})paginator: MatPaginator;
  count = 25;
  constructor(private dataService: DataService) { }

  async ngOnInit(): Promise<void> {
    const beers = await this.dataService.getBeers();

    this.dataSource = new MatTableDataSource(beers);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  async newBeer(): Promise<void> {
    this.dataSource = new MatTableDataSource(await this.dataService.newBeers(++this.count));
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}
