import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-kits',
  templateUrl: './kits.component.html',
  styleUrls: ['./kits.component.scss'],
  standalone: true,
  imports: [MatGridListModule],
})
export class KitsComponent {

}
