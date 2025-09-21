import { Component } from '@angular/core';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-work',
  standalone: true,
  imports: [ProjectCardComponent, CommonModule],
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss'],
})
export class MyWorkComponent {
  projects = [
    {
      title: 'Pokdex',
      description: 'A pokedex app based on the popular game.',
      image: 'pokdex.png',
      link: '#',
    },
    {
      title: 'Pollo Loco',
      description: 'A simple jump and run game.',
      image: 'pollo-loco.png',
      link: '#',
    },
  ];
}
