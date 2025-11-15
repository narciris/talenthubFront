import { Route } from "@angular/router";

export const FILE_ROUTE:Route[] = [
    {
        path:'',
        loadComponent: () => import('./pages/files/files.component').then(m => m.FilesComponent)
       
    } 
]