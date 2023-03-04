import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterComponent } from './pages/character/character.component';
import { EpisodeComponent } from './pages/episode/episode.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { Page404Component } from './pages/page404/page404.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'episode', component: EpisodeComponent },
  { path: 'character', component: CharacterComponent},
  { path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
