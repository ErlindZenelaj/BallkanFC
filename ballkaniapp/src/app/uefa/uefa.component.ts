import { Component, NgModule } from '@angular/core';
import { SplitterModule } from 'primeng/splitter';
import { Player } from 'src/domain/player';
import { PlayerService } from 'src/services/playerservice';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { NewsComponent } from '../news/news.component';



@Component({
  selector: 'app-uefa',
  templateUrl: './uefa.component.html',
  styleUrls: ['./uefa.component.scss'],
  standalone: true,
  imports: [SplitterModule, DialogModule, TableModule, ButtonModule,NewsComponent],
  

})


export class UEFAComponent {
  
  players!: Player[];

  dialogVisible: boolean = false;

  constructor(private playerService: PlayerService) {}

  ngOnInit() {
      this.playerService.getPlayersMedium().then((data) => {
          this.players = data;
      });
  }

  showDialog() {
      this.dialogVisible = true;
  }

}


