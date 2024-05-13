export class Pokemon // ! car pas encore initilalisés sinon erreur 
{
    id!: number; 
    hp!: number;
    cp!: number; // pts de combat 
    name!: string;
    picture!: string; // url image 
    types!: Array<string>; // type tableau de string car peut avoir plusieurs types ex : [Feu, Roche]
    created!: Date; // Date en js il me semble 
    
}

