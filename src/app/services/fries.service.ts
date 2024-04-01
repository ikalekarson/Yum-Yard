import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FriesModel } from '../model/fries.model';
import { Observable } from 'rxjs';

@Injectable()
export class FriesService {
  mockUrl: string = 'http://localhost:3000/fries';

  constructor(private http: HttpClient) {}

  _getAllFries(): Observable<FriesModel[]> {
    return this.http.get<FriesModel[]>(this.mockUrl);
  }
  
  _getCurrentFriesById(id: number): Observable<FriesModel> {
    return this.http.get<FriesModel>(this.mockUrl + '/' + id)
  }
}
