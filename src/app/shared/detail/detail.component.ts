import { Component } from '@angular/core';
import { ActivatedRoute, Params, UrlSegment } from '@angular/router';
import { FriesModel } from 'src/app/model/fries.model';
import { PizzaModel } from 'src/app/model/pizza.model';
import { RollModel } from 'src/app/model/roll.model';
import { FriesService } from 'src/app/services/fries.service';
import { PizzaService } from 'src/app/services/pizza.service';
import { RollService } from 'src/app/services/roll.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [PizzaService, RollService, FriesService],
})
export class DetailComponent {
  currentItem: PizzaModel | RollModel | FriesModel = {
    id: 0,
    type: '',
    topping: '',
    seasoning: '',
    crust: '',
    price: '',
  };

  constructor(
    private activedRoute: ActivatedRoute,
    private pizzaService: PizzaService,
    private rollService: RollService,
    private friesService: FriesService
  ) {}

  ngOnInit(): void {
    console.log(this.activedRoute.url);
    let activeMenuNAme: string = '';
    let id: number = 0;

    this.activedRoute.url.subscribe((urlDetails: UrlSegment[]) => {
      // ACtive Menu
      console.log(urlDetails[0].path);
      activeMenuNAme = urlDetails[0].path;
    });

    this.activedRoute.params.subscribe((result: Params) => {
      console.log(result['id']);
      id = result['id'];
      // this.getCurrentPizzaById(id);
    });

    // Switch case
    switch (
      activeMenuNAme //if (activeMenuName === 'pizza')
    ) {
      case 'pizzas':
        return this.getCurrentPizzaById(id);
      case 'rolls':
        return this.getCurrentRollById(id);
      case 'fries':
        return this.getCurrentFriesById(id);
    }
  }

  getCurrentPizzaById(id: number) {
    this.pizzaService._getCurrentPizzaById(id).subscribe(
      (result: PizzaModel) => {
        this.currentItem = result;
      });
  }
  getCurrentRollById(id: number) {
    this.rollService._getCurrentRollById(id).subscribe(
      (result: RollModel) => {
      this.currentItem = result;
    });
  }
  getCurrentFriesById(id: number) {
    this.friesService._getCurrentFriesById(id).subscribe(
      (result: FriesModel) => {
        this.currentItem = result;
      });
  }
}
