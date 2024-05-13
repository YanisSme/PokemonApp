// Directive classe angular sans template qui permet d'intéragir avec les templates 
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBorderCard]'
})

export class BorderCardDirective {

  private initialColor: string = "#f5f5f5";
  private defaultColor: string = "#009688";
  private defaultHeight: number = 180;

  constructor (private el: ElementRef) // ElementRef : Viens de Angular représente une référence vers un élément du DOM ici une carte
  { 
    this.setHeight(this.defaultHeight);
    this.setBordure(this.initialColor);
  }

  @Input ('appBorderCard') borderColor:string; // Input permet à un composant enfant d'accepter une valeur passée depuis son composant parent. 

  // @HostListener : Lie une méthode de notre Directive à un élément donné
  @HostListener('mouseenter') onMouseEnter() //  mouseEnter si la souris est dans le truc 
  {
    this.setBordure(this.borderColor || this.defaultColor); // Le || permet de définir la couleur # (par défaut) si pas de couleur donné par l'utilisateur 
  }

  @HostListener('mouseleave') onMouseLeaver() //  mouseLeave si la souris sort du truc 
  {
    this.setBordure(this.initialColor);
  }

  setHeight (height : number) // Définit une hauteur commune à tous nos éléments 
  {
    this.el.nativeElement.style.height = `${height}px`; // nativeElement recup vrmt l'élément du DOM (encapsulé dans ElementRef)
  }

  setBordure (color : string) // Définit la couleur et la bordure d'une carte
  {
    this.el.nativeElement.style.border = `solid 4px ${color}`; // Bordure solid de 4px de couleur => color
  }
}


