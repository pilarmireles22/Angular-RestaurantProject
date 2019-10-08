import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {Page404Component} from './page404/page404.component';
import { DetailsRestaurantsComponent } from './details-restaurants/details-restaurants.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'details-restaurants', component: DetailsRestaurantsComponent},
    {path: '**', component: Page404Component},
];
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
