import { Equipe } from "./Equipe"

export class Campeonato {

    constructor(
        private _nome: string,
        private _equipes: Equipe[]
    ){}

    
    public get nome() : string {
        return this._nome
    }
    
    public get equipes() : Equipe[] {
        return this._equipes
    }
    
    


}