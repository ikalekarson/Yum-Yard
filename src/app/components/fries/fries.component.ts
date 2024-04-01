import { Component, OnInit } from '@angular/core';
import { ColumnModel } from 'src/app/model/column.model';
import { FriesModel } from 'src/app/model/fries.model';
import { FriesService } from 'src/app/services/fries.service';

@Component({
  selector: 'app-fries',
  templateUrl: './fries.component.html',
  styleUrls: ['./fries.component.css'],
  providers : [FriesService]
})
export class FriesComponent implements OnInit {
  allFries: FriesModel[] = [];
  allColumn: ColumnModel[] = [
    { label: 'Id', property: 'id' },
    { label: 'Fries Type', property: 'type' },
    { label: 'Cutting Style', property: 'cutting' },
    { label: 'Seasoning Option', property: 'seasoning' },
    { label: 'Price', property: 'price' },
  ];
  currentItem: FriesModel = {
    id : 0,
    type : '',
    cutting : '',
    seasoning : '',
    price : ''
  }

  constructor(private FriesService: FriesService) {}

  ngOnInit(): void {
    this.getAllFries();
  }

  getAllFries() {
    this.FriesService._getAllFries().subscribe((result: FriesModel[]) => {
      this.allFries = result;
    });
  }

}
