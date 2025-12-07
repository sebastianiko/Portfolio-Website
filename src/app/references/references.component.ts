
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReferencesComponent {
  references: { name: string; project: string; text: string }[] = [
    {
      name: 'James Rugman',
      project: 'Project Join',
      text: 'Sofia is a reliable and friendly person. Work in a structured way and write a clear code. I highly recommend her as a colleague.',
    },
    {
      name: 'Evelyn Marx',
      project: 'Project DA Bubble',
      text: 'Sofia is a trustworthy teamplayer and can cope with the stress of deadlines. Structured work and clear code.',
    },
    {
      name: 'Noah Müller',
      project: 'Project Pollo Loco',
      text: 'Sofia had to develop, format and deliver content in collaboration with the team members. She is a reliable and friendly person.',
    },
  ];
}
