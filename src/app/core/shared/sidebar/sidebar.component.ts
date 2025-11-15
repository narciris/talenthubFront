import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MENU_ITEMS } from '../../config/menu-items';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  user = {
    name: 'Juan Desarrollador',
    email: 'juan@talentconnect.com',
    initials: 'JD'
  };

  menuItems = MENU_ITEMS;

}
