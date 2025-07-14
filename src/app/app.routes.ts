import { Routes } from '@angular/router';
import { Pokemon } from './pokemon/pokemon';
import { Login } from './login/login'
export const routes: Routes = [
    { path: 'login', component: Login },
    { path: 'pokemon', component: Pokemon},
    { path: '', redirectTo: 'login', pathMatch: 'full'}
];
