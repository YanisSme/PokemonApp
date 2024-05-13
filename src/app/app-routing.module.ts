import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

/* Le routeur de Angular fonctionne de haut en bas et affiche la première route qu'il croise
Donc bien faire ATTENTION dans l'ordre dans lequel on déclare nos routes si ** au début toutes nos routes seront pagenotfound
Donc bien déclarer les routes de la + spécifique à la + globale
*/
const routes: Routes = [
  { path: 'pokemons', component: ListPokemonComponent },
  { path: 'pokemon/:id', component: DetailPokemonComponent},
  { path: '', redirectTo: 'pokemons', pathMatch: 'full'}, // Route par défaut au démarrage de l'application 
  { path: '**', component: PageNotFoundComponent} // ** intercepte toutes les routes au sein de mon application
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
