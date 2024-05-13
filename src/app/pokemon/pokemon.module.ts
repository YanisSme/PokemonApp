import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorderCardDirective } from '../pokemon/border-card.directive';
import { PokemonTypeColorPipe } from '../pokemon/pokemon-type-color.pipe';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { RouterModule, Routes } from '@angular/router';


const pokemonRoutes: Routes = [
  { path: 'pokemons', component: ListPokemonComponent },
  { path: 'pokemon/:id', component: DetailPokemonComponent},
];

/*
  Un module Angular est une manière de regrouper des composants, des directives, des pipes et des services qui sont associés. 
  Tout comme les classes sont utilisées pour regrouper des méthodes et des propriétés dans la POO,
  les modules Angular sont utilisés pour regrouper des fonctionnalités.
*/

@NgModule({
  declarations: [
    BorderCardDirective,
    PokemonTypeColorPipe,
    ListPokemonComponent,
    DetailPokemonComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(pokemonRoutes) // concerne les routes de pokemon à revoir cette ligne 
  ]
})
export class PokemonModule { }