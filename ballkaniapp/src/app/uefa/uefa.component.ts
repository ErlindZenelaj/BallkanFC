import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-uefa',
  templateUrl: './uefa.component.html',
  styleUrls: ['./uefa.component.css'],
  standalone: true,
  imports: [MatGridListModule, MatTableModule],

})





export class UEFAComponent {
displayedColumns: string[] = ['position', 'name', 'team', 'symbol','goals','assist'];
dataSource = ELEMENT_DATA;

}


export interface PeriodicElement {
  name: string;
  position: number;
  team: string;
  symbol: string;
  goals: number;
  assist: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hamidi W.', team: "FC Ballkani", symbol: 'ST',goals: 1, assist: 0},
  {position: 2, name: 'Helium', team: "FC Ballkani", symbol: 'MD', goals: 1, assist: 0},
  {position: 3, name: 'Lithium', team: "FC Ballkani", symbol: 'MD', goals: 0, assist: 1},

];



