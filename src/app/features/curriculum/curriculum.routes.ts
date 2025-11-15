import { Route } from "@angular/router";

export const CURRICULUM_ROUTES :Route []= [

    {
        path: '',
        loadComponent: () => import('../curriculum/pages/home/home.component').then(m => m.HomeComponent)
    }
]