import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PokemonModule } from './pokemon/pokemon.module';
import { Pokemon } from './pokemon/pokemon';

/*
  Un module Angular est une manière de regrouper des composants, des directives, des pipes et des services qui sont associés. 
  Tout comme les classes sont utilisées pour regrouper des méthodes et des propriétés dans la POO,
  les modules Angular sont utilisés pour regrouper des fonctionnalités.
*/
@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    PokemonModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
