import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { SidebarComponent } from './core/shared/sidebar/sidebar.component';
import { ToastComponent } from './core/shared/components/toast/toast.component';
import { Toast } from "primeng/toast";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToastComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'talentConnect';
}
