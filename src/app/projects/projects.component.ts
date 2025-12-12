import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="projects-section">
      <div class="ellipse ellipse1"></div>
      <div class="ellipse ellipse2"></div>
      <div class="ellipse ellipse3"></div>

      <h2 class="title-my-work">My work</h2>
      <p class="subtitle-text">A selection of my projects.</p>

      <div class="projects-list">
        <div
          *ngFor="let project of projects; let i = index"
          class="project-item"
          [ngClass]="i % 2 !== 0 ? 'odd' : 'even'"
        >
          <div
            class="project-image"
            [style.background-image]="'url(' + project.imageUrl + ')'"
          ></div>
          <div class="project-description">
            <h3 class="project-title">{{ project.title }}</h3>
            <div class="technologies-list">
              {{ project.technologies.join(' | ') }}
            </div>
            <p class="description-text">{{ project.description }}</p>
            <div class="project-links">
              <a [href]="project.liveUrl" target="_blank" class="btn-primary"
                >Live</a
              >
              <a
                [href]="project.githubUrl"
                target="_blank"
                class="btn-secondary-figma"
                >Code</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      @import url('https://fonts.googleapis.com/css2?family=Baloo&family=Montserrat&family=Poppins&display=swap');

      :host {
        display: block;
      }

      .projects-section {
        max-width: 1200px;
        margin: 0 auto;
        text-align: center;
        position: relative;
        overflow: hidden;
      }

      .title-my-work {
        font-family: 'Baloo', cursive;
        font-size: 96px;
        line-height: 100%;
        letter-spacing: 0.01em;
        color: #5988ff;
        margin-bottom: 10px;
        position: relative;
        z-index: 1;
      }

      .subtitle-text {
        font-family: 'Montserrat', sans-serif;
        font-size: 23px;
        line-height: 120%;
        color: #000000;
        margin-bottom: 60px;
        position: relative;
        z-index: 1;
      }

      .projects-list {
        display: flex;
        flex-direction: column;
        gap: 150px;
        position: relative;
        z-index: 1;
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
        color: #5988ff;
        margin-bottom: 15px;
      }

      .technologies-list {
        font-family: 'Montserrat', sans-serif;
        font-size: 23px;
        color: #5988ff;
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

      .btn-primary,
      .btn-secondary-figma {
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
        background-color: #5988ff;
        color: white;
        border: 2px solid #5988ff;
      }

      .btn-primary:hover {
        background-color: #4775e6;
      }

      .btn-secondary-figma {
        background-color: transparent;
        color: #5988ff;
        border: 2px solid #5988ff;
      }

      .btn-secondary-figma:hover {
        background-color: #5988ff;
        color: white;
      }

      .ellipse {
        position: absolute;
        background-color: #5988ff;
        filter: blur(100px);
        border-radius: 50%;
        z-index: -1;
      }

      .ellipse1 {
        width: 300px;
        height: 300px;
        top: -100px;
        left: -100px;
      }

      .ellipse2 {
        width: 400px;
        height: 400px;
        bottom: -150px;
        right: -150px;
      }

      .ellipse3 {
        width: 250px;
        height: 250px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
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
    `,
  ],
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
