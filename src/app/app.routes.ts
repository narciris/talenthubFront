import { Routes } from '@angular/router';
import { ForumListComponent } from './features/forum/components/forum-list/forum-list.component';
import { LoginComponent } from './features/auth/pages/login/login.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
       {
        // Ruta 2: Define qué componente cargar cuando la URL es /forum
        path: 'login',
        component: LoginComponent
    },
    
];
