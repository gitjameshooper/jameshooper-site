import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Injectable()
export class HomeService {
  
  constructor(private http: HttpClient) {
    
  }

 

  
}