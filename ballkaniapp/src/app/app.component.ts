import { Component } from '@angular/core';
import { SlideInterface } from 'src/types/slide.interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ballkaniapp';
  slides: SlideInterface[] = [
    { title: 'Slide 1', url: '../../assets/img/Ballkani2023.jpeg' },
    { title: 'Slide 2', url: '../../assets/img/BallkaniChampions.jpeg' },
    { title: 'Slide 3', url: '../../assets/img/BallkaniFans.jpeg' },


  ];
}
