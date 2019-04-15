import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FilmComponent } from './film/film.component';

const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'film', component: FilmComponent},
  { path: '', component : HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



