import { Routes } from '@angular/router';

export const routes: Routes = [
    // {
    //     path: '',
    //     loadComponent: () => import('./directive/customdirective/customdirective.component').then(m => m.CustomdirectiveComponent)
    // },
    {
        path: 'directive',
        loadComponent: () => import('./directive/customdirective/customdirective.component').then(m => m.CustomdirectiveComponent)
    },
    {
        path: 'template-form',
        loadComponent: () => import('./form/form.component').then(m => m.FormComponent)
    },
    {
        path: 'reactive-form',
        loadComponent: () => import('./reactive-form/reactive-form.component').then(m => m.ReactiveFormComponent)
    }
];
