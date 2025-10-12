import { Routes } from '@angular/router';
import { ForumListComponent } from './features/forum/components/forum-list/forum-list.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'forum',
        pathMatch: 'full'
    },
       {
        // Ruta 2: Define qué componente cargar cuando la URL es /forum
        path: 'forum',
        component: ForumListComponent
    },
    
];
