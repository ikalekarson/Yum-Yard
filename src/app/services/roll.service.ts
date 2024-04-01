import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RollModel } from '../model/roll.model';

@Injectable()
export class RollService {
  mockUrl: string = 'http://localhost:3000/rolls';

  constructor(private http: HttpClient) {}

  _getAllRoll(): Observable<RollModel[]> {
    return this.http.get<RollModel[]>(this.mockUrl);
  }

  _getCurrentRollById(id: number): Observable<RollModel> {
    return this.http.get<RollModel>(this.mockUrl + '/' + id)
  }
}
