import { Component, OnInit } from '@angular/core';
import { Observable, Subject, combineLatest } from 'rxjs';
import { share } from 'rxjs/operators';
import { HomeModel } from '../shared/all-models.models';
import { ArraySortPipe } from '../shared/pipes/sort.pipe';
import { HomeService } from '../shared/services/home.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ArraySortPipe]
})
export class HomeComponent implements OnInit{
 

  constructor(private homeService: HomeService, private sortPipe:ArraySortPipe){
  }
 public ngOnInit() {
 
 }
  
}
