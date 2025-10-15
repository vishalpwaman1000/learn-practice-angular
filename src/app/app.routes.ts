import { Routes } from '@angular/router';

export const routes: Routes = [
    // {
    //     path: '',
    //     loadComponent: () => import('./directive/customdirective/customdirective.component').then(m => m.CustomdirectiveComponent)
    // },
    {
        path: 'directive',
        loadComponent: () => import('./directive/customdirective/customdirective.component').then(m => m.CustomdirectiveComponent)
    }
];
