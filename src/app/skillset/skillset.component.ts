import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skillset',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skillset.component.html',
  styleUrls: ['./skillset.component.scss']
})
export class SkillsetComponent {
  skills = [
    { name: 'Angular', icon: 'angular.svg' },
    { name: 'TypeScript', icon: 'typescript.svg' },
    { name: 'JavaScript', icon: 'javascript.svg' },
    { name: 'HTML', icon: 'html.svg' },
    { name: 'CSS', icon: 'css.svg' },
    { name: 'Firebase', icon: 'firebase.svg' }
  ];
}
