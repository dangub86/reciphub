import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowseComponent } from './browse/browse.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  { path: 'browse', component: BrowseComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: '/browse', pathMatch: 'full' } // Redirect to 'browse' by default
];

//@NgModule({
  //imports: [RouterModule.forRoot(routes)],
  //exports: [RouterModule]
//})

//export class AppRoutingModule { }
//export const AppRoutingModule = RouterModule.forRoot(routes);
