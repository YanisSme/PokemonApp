import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrl: './detail-pokemon.component.css'
})

export class DetailPokemonComponent 
{
  pokemonList : Pokemon[]; 
  pokemon : Pokemon | undefined; // pokemon a afficher à l'utilisateur 

  constructor (private route: ActivatedRoute, private router : Router, private pokemonService: PokemonService) {} // Initialisation des services : private nom_instance nom_service

  ngOnInit () : void
  {
    const pokemonId : string | null = this.route.snapshot.paramMap.get('id'); // Je récupère l'id contenu dans l'url si j'ai un id c'est une string si j'en ai pas c'est un null 
    if (pokemonId) // Si mon id est ok alors je vais attribuer à pokemon le pokemon qui correspond à cette identifiant
    {
      this.pokemon = this.pokemonService.getPokemonById(+pokemonId);
    }
  }

  goToPokemonList () : void // Va rediriger l'utilisateur directement depuis le component 
  {
    this.router.navigate(['/pokemons']); // permet de naviguer dans l'url que je veux 
  }
}

/*
  Pour faire des formulaires 2 méthodes : 
  FormsModule : Développe une partie importante du formulaire dans le template directement | + adapté pour les petits formulaires/débutants
  ReactiveFormsModule : Développement du formulaire côté composant directement | l'autre truc dcp 
  Les formulaires proviennent de la même lib @angular/forms
  2 directives de FormsModule (+ d'infos sur la doc Angular)
  ngForm : Active sur toutes les balises <form>, crée une instance d'un objet FormGroup |
  Sert à savoir si le formulaire que remplis l'uitlisateur est ok ou pas, on peut également avec une notification quand le formulaire est soumis...
  ngModel : Appliquée sur chacun des champs du formulaire, crée une instance d'un objet FormControl pour chaque champ de notre formulaire comme <input> ou <select>...
*/