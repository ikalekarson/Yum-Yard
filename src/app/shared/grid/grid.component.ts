import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ColumnModel } from 'src/app/model/column.model';
import { FriesModel } from 'src/app/model/fries.model';
import { PizzaModel } from 'src/app/model/pizza.model';
import { RollModel } from 'src/app/model/roll.model';

type Item = PizzaModel | FriesModel | RollModel 

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {
  @Input() items: Item [] = [];
  @Input() columns : ColumnModel[] = [];

}
