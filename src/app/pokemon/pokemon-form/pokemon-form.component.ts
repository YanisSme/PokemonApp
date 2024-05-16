import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';

/*
  Pour faire des formulaires 2 méthodes : 
  FormsModule : Développe une partie importante du formulaire dans le template directement | + adapté pour les petits formulaires/débutants
  ReactiveFormsModule : Développement du formulaire côté composant directement | l'autre truc dcp 
  Les formulaires proviennent de la même lib @angular/forms
  2 directives de FormsModule (+ d'infos sur la doc Angular)
  ngForm : Active sur toutes les balises <form>, crée une instance d'un objet FormGroup |
  Sert à savoir si le formulaire que remplis l'uitilisateur est ok ou pas, on peut également avec une notification quand le formulaire est soumis...
  ngModel : Appliquée sur CHACUN des champs du formulaire, crée une instance d'un objet FormControl pour chaque champ de notre formulaire comme <input> ou <select>...
*/

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrl: './pokemon-form.component.css'
})
export class PokemonFormComponent 
{
  @Input () pokemon: Pokemon;

  types: string[];

  constructor (private pokemonServices: PokemonService, private router: Router) {}

  ngOnInit ()
  {
    this.types = this.pokemonServices.getPokemonTypeList(); // Recup la liste de tous les types
  }

  hasType (type : string): boolean // Vérifie si le pokemon avec lequel je taffe à le type passé en paramètre
  { 
    return this.pokemon.types.includes(type); // include méthode JS (qui renvoie true/false)
  }

  selectType ($event: Event, type: string) // Event : événement du DOM 
  {
    const isChecked: boolean = ($event.target as HTMLInputElement).checked;
    if (isChecked) // si case cochée
    {
      this.pokemon.types.push(type); // on push le nv type dans le tab
    }
    else // on retire le type
    {
      const index = this.pokemon.types.indexOf(type); // on chope l'index du type que l'utilisateur veut tej
      this.pokemon.types.splice(index, 1); // on le retire
    }
  }

  onSubmit () // quand l'utilisateur soumet le fomrulaire 
  {
    console.log('Submit form !');
    this.router.navigate(['/pokemon', this.pokemon.id]); // on le redirige vers le pokemon 
  }

  isTypesValid (type: string) : boolean
  {
    if (this.pokemon.types.length == 1 && this.hasType(type)) // si 1 type et je suis sur le type courant je bloque la checkBox du type 
    {
      return false;
    }

    if (this.pokemon.types.length > 2 && !this.hasType(type)) 
    {
      return false;
    }
    
    return true;
  }
}
