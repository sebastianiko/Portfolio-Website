import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="projects-section">
      <div class="decorative-ellipse ellipse-4"></div>
      <div class="decorative-ellipse ellipse-9"></div>
      <div class="decorative-ellipse ellipse-10"></div>
      <div class="decorative-ellipse ellipse-11"></div>
      <div class="decorative-ellipse ellipse-12"></div>
      <div class="decorative-ellipse ellipse-7"></div>

      <h2 class="title-my-work">My work</h2>
      <p class="subtitle-text">A selection of my projects.</p>
      
      <div class="projects-list">
        <div *ngFor="let project of projects; let i = index" 
             class="project-item" 
             [ngClass]="(i % 2 !== 0) ? 'odd' : 'even'">
          <div class="project-image" [style.background-image]="'url(' + project.imageUrl + ')'"></div>
          <div class="project-description">
            <h3 class="project-title">{{ project.title }}</h3>
            <div class="technologies-list">
              {{ project.technologies.join(' | ') }}
            </div>
            <p class="description-text">{{ project.description }}</p>
            <div class="project-links">
              <a [href]="project.liveUrl" target="_blank" class="btn-primary">Live</a>
              <a [href]="project.githubUrl" target="_blank" class="btn-secondary-figma">Code</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    @import url('https://fonts.googleapis.com/css2?family=Baloo&family=Montserrat&family=Poppins&display=swap');

    :host {
      display: block;
      padding: 60px 20px;
      background-color: #fff;
    }

    .projects-section {
      max-width: 1200px;
      margin: 0 auto;
      text-align: center;
      position: relative;
      overflow: hidden;
      height: 2700px; /* Approximate height for ellipse positioning */
    }

    .title-my-work {
      font-family: 'Baloo', cursive;
      font-size: 96px;
      line-height: 100%;
      letter-spacing: 0.01em;
      color: #5988FF;
      margin-bottom: 10px;
    }

    .subtitle-text {
      font-family: 'Montserrat', sans-serif;
      font-size: 23px;
      line-height: 120%;
      color: #000000;
      margin-bottom: 60px;
    }

    .projects-list {
      display: flex;
      flex-direction: column;
      gap: 150px;
    }

    .project-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: left;
    }

    .project-image {
      width: 720px;
      height: 460px;
      background-size: cover;
      background-position: center;
      border-radius: 10px;
      filter: drop-shadow(5px 5px 15px rgba(0, 0, 0, 0.15));
      margin-bottom: 20px;
    }

    .project-description {
      max-width: 500px;
    }
    
    .project-title {
      font-family: 'Baloo', cursive;
      font-size: 45px;
      color: #5988FF;
      margin-bottom: 15px;
    }

    .technologies-list {
      font-family: 'Montserrat', sans-serif;
      font-size: 23px;
      color: #5988FF;
      margin-bottom: 15px;
    }

    .description-text {
      font-family: 'Montserrat', sans-serif;
      font-size: 16px;
      line-height: 120%;
      color: #000000;
      margin-bottom: 20px;
    }

    .project-links {
      display: flex;
      gap: 15px;
    }

    .btn-primary, .btn-secondary-figma {
      height: 58px;
      padding: 15px 30px;
      border-radius: 10px;
      font-family: 'Poppins', sans-serif;
      font-size: 23px;
      line-height: 120%;
      text-decoration: none;
      filter: drop-shadow(5px 5px 15px rgba(0, 0, 0, 0.15));
      display: inline-flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
    }

    .btn-primary {
      background-color: #5988FF;
      color: white;
      border: 2px solid #5988FF;
    }

    .btn-primary:hover {
      background-color: #4775e6;
    }

    .btn-secondary-figma {
      background-color: transparent;
      color: #5988FF;
      border: 2px solid #5988FF;
    }

    .btn-secondary-figma:hover {
      background-color: #5988FF;
      color: white;
    }
    
    .decorative-ellipse {
        position: absolute;
        background: radial-gradient(74.22% 74.22% at 19.79% 22.42%, #5988FF 6.25%, #5988FF 51.56%, #0043F0 100%);
        z-index: -1;
    }

    .ellipse-4 {
        width: 393.32px;
        height: 393.32px;
        left: 0px;
        top: 177px;
        transform: rotate(81.57deg);
    }

    .ellipse-9 {
        width: 652.16px;
        height: 652.16px;
        right: -300px;
        top: 462px;
        transform: rotate(81.57deg);
    }
    
    .ellipse-10 {
        width: 51px;
        height: 51px;
        left: 323px;
        top: 910px;
    }

    .ellipse-11 {
        width: 237.84px;
        height: 237.84px;
        left: 354px;
        top: 1351px;
        transform: rotate(81.57deg);
    }
    
    .ellipse-12 {
        width: 98px;
        height: 98px;
        right: 150px;
        top: 1742px;
    }

    .ellipse-7 {
        width: 108.75px;
        height: 108.75px;
        left: 50%;
        transform: translateX(-50%);
        top: 2395px;
    }


    /* --- Responsive --- */
    @media (max-width: 767px) {
      .project-image {
        width: 100%;
        max-width: 720px;
        height: 300px; /* Adjust height for mobile */
      }
      .project-item.odd .project-description,
      .project-item.even .project-description {
        text-align: left;
      }
      .project-links {
        justify-content: flex-start;
      }
    }

    @media (min-width: 768px) {
      .project-item {
        flex-direction: row;
        gap: 50px;
        align-items: center;
      }

      .project-image {
        width: 50%;
        margin-bottom: 0;
      }

      .project-description {
        width: 50%;
      }

      .project-item.odd {
        flex-direction: row-reverse;
      }
      
      .project-item.odd .project-description {
        text-align: right;
      }
      .project-item.odd .project-links {
        justify-content: flex-end;
      }
    }

    @media (min-width: 1200px) {
        .project-item {
            gap: 100px;
        }
    }
  `]
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Join',
      technologies: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase'],
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      imageUrl: 'https://placehold.co/720x460/D3D3D3/000?text=JOIN+App',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Pollo Loco',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      imageUrl: 'https://placehold.co/720x460/D3D3D3/000?text=POLLO+LOCO+Game',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'DA Buble',
      technologies: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase'],
      description: 'A very Simple Customer Relationship Management system working with CRUD functionality.',
      imageUrl: 'https://placehold.co/720x460/D3D3D3/000?text=DA+BUBLE+CRM',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Pokédex',
      technologies: ['JavaScript', 'HTML', 'CSS', 'Api'],
      description: 'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      imageUrl: 'https://placehold.co/720x460/D3D3D3/000?text=POKEDEX+App',
      liveUrl: '#',
      githubUrl: '#'
    }
  ];
}