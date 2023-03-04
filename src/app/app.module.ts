import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './components/cards/cards.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CharacterComponent } from './pages/character/character.component';
import { EpisodeComponent } from './pages/episode/episode.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CardsEpisodeComponent } from './components/cards-episode/cards-episode.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    CharacterComponent,
    CardsComponent,
    EpisodeComponent,
    CardsEpisodeComponent,
    CardsEpisodeComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
