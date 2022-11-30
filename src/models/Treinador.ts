import { Profissional } from "./Profissional"

export enum tatica {
    OFENSIVA,
    DEFENSIVA,
    EQUILIBRADA
}


export class Treinador extends Profissional {

    constructor(
        _nomePessoa: string,
        _idade: number,
        // _equipePertencente: Equipe,
        private _tatica: tatica
    ){
        super(_nomePessoa, _idade)
    }

    
    public get tatica() : tatica {
        return this._tatica
    }
    



}