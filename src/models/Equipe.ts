import { Profissional } from "./Profissional";



export class Equipe {

    constructor(
        private _nomeEquipe: string,
        private _participantes: Profissional[]
    ){}


    
    public get nomeEquipe() : string {

        return this._nomeEquipe
    }
    

}