import { Route } from "@angular/router";

export const AUTH_ROUTES:Route[]=[
    {
        path:'',
        // canActivate:[authGuard],
        loadComponent: ()  => import('../login/login.component').then(m => m.LoginComponent)

    },
    {
        path:'register',
        // canActivate: [authGuard],
        loadComponent: () => import('../login/login.component').then( m => m.LoginComponent)
    }
]