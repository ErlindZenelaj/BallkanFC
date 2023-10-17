import { Component } from '@angular/core';
import { SlideInterface } from 'src/types/slide.interface';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  slides: SlideInterface[] = [
    { title: 'Slide 1', url: '../../assets/img/BallkaniChampions2.jpeg' },
    { title: 'Slide 2', url: '../../assets/img/BallkaniChampion.jpeg' },
    { title: 'Slide 3', url: '../../assets/img/Ballkani2023.jpeg' },
    { title: 'Slide 3', url: '../../assets/img/BallkaniFans.jpeg' },
  ];
}
