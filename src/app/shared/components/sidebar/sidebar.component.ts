import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
user = {
    name: 'Juan Desarrollador',
    email: 'juan@talenthub.com',
    initials: 'JD'
  };

  menuItems = [
    {
      label: 'Foro',
      icon: 'forum',
      route: '/forum'
    },
    {
      label: 'Currículum',
      icon: 'curriculum',
      route: '/curriculum'
    }
  ];

}
