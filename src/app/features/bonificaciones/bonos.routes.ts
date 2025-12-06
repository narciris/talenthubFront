import { Route } from "@angular/router";

export const BONOS_ROUTES:Route[] = [
    {
        path: '',
        loadComponent: () => import('../bonificaciones/pages/home/home.component').then( m => m.HomeComponent)
    }
]