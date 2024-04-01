import { Component, OnInit } from '@angular/core';
import { ColumnModel } from 'src/app/model/column.model';
import { RollModel } from 'src/app/model/roll.model';
import { RollService } from 'src/app/services/roll.service';

@Component({
  selector: 'app-roll',
  templateUrl: './roll.component.html',
  styleUrls: ['./roll.component.css'],
  providers : [RollService]
})
export class RollComponent implements OnInit{
 
    allRoll: RollModel[] = [];
    allColumn: ColumnModel[] = [
      { label: 'Id', property: 'id' },
      { label: 'Roll Type', property: 'type' },
      { label: 'Filling Option', property: 'filling' },
      { label: 'Dough Texture', property: 'dough' },
      { label: 'Price', property: 'price' },
    ];
    currentItem: RollModel = {
      id : 0,
      type : '',
      filling : '',
      dough : '',
      price : ''
    }
  
    constructor(private RollService: RollService) {}
  
    ngOnInit(): void {
      this.getAllRoll();
    }
  
    getAllRoll() {
      this.RollService._getAllRoll().subscribe((result: RollModel[]) => {
        this.allRoll = result;
      });
    }
  
   
}
