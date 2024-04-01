import { Component, OnInit } from '@angular/core';
import { ColumnModel } from 'src/app/model/column.model';
import { PizzaModel } from 'src/app/model/pizza.model';
import { PizzaService } from 'src/app/services/pizza.service';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css'],
  providers: [PizzaService],
})
export class PizzaComponent implements OnInit {
  allPizza: PizzaModel[] = [];
  // allColumn: ColumnModel[] = [
  //   { label: 'Item Id', property: 'id' },
  //   { label: 'Pizza Type', property: 'type' },
  //   { label: 'Topping Selection', property: 'topping' },
  //   { label: 'Crust Thickness', property: 'crust' },
  //   { label: 'Price', property: 'price' },
  // ];
  currentItem: PizzaModel = {
    id : 0,
    type : '',
    topping : '',
    crust : '',
    price : ''
  }

  constructor(private pizzaService: PizzaService) {}

  ngOnInit(): void {
    this.getAllPizza();
  }

  getAllPizza() {
    this.pizzaService._getAllPizza().subscribe((result: PizzaModel[]) => {
      this.allPizza = result;
    });
  }


}
