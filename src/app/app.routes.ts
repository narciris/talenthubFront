import { Routes } from '@angular/router';
import { ForumListComponent } from './features/forum/components/forum-list/forum-list.component';
import { LoginComponent } from './features/auth/pages/login/login.component';
import { authGuard } from './core/config/guards/auth.guard';

export const routes: Routes = [
  // Redirigir '/' a '/login'
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  // Login (sin layout)
  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/pages/login/login.component').then(m => m.LoginComponent)
  },

  // Rutas con MainLayout
  {
    path: '',
    loadComponent: () =>
      import('../app/core/shared/layouts/layouts.component').then(m => m.LayoutsComponent),
    children: [
      {
        path: 'files',
        canActivate:[authGuard],
        loadChildren: () => import('./features/upload/file.routes').then(m => m.FILE_ROUTE)
      },
      {
        path: 'curriculum',
        canActivate:[authGuard],
        loadChildren: () => import('./features/curriculum/curriculum.routes').then(m => m.CURRICULUM_ROUTES)
      },
      {
        path: 'foro',
        canActivate:[authGuard],
        loadChildren: () => import('./features/forum/forum.routes').then(m => m.FORUM_ROUTES)
      }
    ]
  },

  // Wildcard: cualquier ruta no definida
  {
    path: '**',
    redirectTo: 'login'
  }
];
