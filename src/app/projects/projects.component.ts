import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Join',
      technologies: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase'],
      description:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      imageUrl: 'https://placehold.co/720x460/D3D3D3/000?text=JOIN+App',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Pollo Loco',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      description:
        'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      imageUrl: 'https://placehold.co/720x460/D3D3D3/000?text=POLLO+LOCO+Game',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'DA Buble',
      technologies: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase'],
      description:
        'A very Simple Customer Relationship Management system working with CRUD functionality.',
      imageUrl: 'https://placehold.co/720x460/D3D3D3/000?text=DA+BUBLE+CRM',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Pokédex',
      technologies: ['JavaScript', 'HTML', 'CSS', 'Api'],
      description:
        'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      imageUrl: 'https://placehold.co/720x460/D3D3D3/000?text=POKEDEX+App',
      liveUrl: '#',
      githubUrl: '#',
    },
  ];
}
