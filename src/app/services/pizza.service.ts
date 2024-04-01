import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PizzaModel } from '../model/pizza.model';

@Injectable()
export class PizzaService {
  mockUrl: string = 'http://localhost:3000/pizzas';

  constructor(private http: HttpClient) {}

  _getAllPizza(): Observable<PizzaModel[]> {
    return this.http.get<PizzaModel[]>(this.mockUrl);
  }

  _getCurrentPizzaById(id: number): Observable<PizzaModel> {
    return this.http.get<PizzaModel>(this.mockUrl + '/' + id)
  }
}
